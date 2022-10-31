import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { SweetAlertService } from 'src/app/providers/sweet-alert.service';
import { agentvalidationService } from 'src/app/services/agentvalidation.service';

@Component({
  selector: 'app-agentvalidation',
  templateUrl: './agentvalidation.component.html',
  styleUrls: ['./agentvalidation.component.css']
})
export class AgentvalidationComponent implements OnInit {
  agentvalidations: any;
  users: any;

  constructor(private agentvalidationservice: agentvalidationService,
    private toastService: ToastService,
    private sweetAlertService: SweetAlertService,) { }

  ngOnInit(): void {
    this.getagentvalidation();
  }
  getagentvalidation() {
    this.agentvalidationservice.getagentvalidation().subscribe(
      (res: any) => {
        this.users = res.data
        this.agentvalidations = this.users.filter(item => {
          return "AgentValidation" == item.role;
        })
      }
    )
  }

  supprimer(id: any) {
    this.sweetAlertService.deleteConfirmation().then((result) => {
      if (result.value) {
        this.agentvalidationservice.deleteagentvalidation(id).subscribe((response: any) => {
          this.toastService.success(response?.message);
          this.getagentvalidation();
        }, (error: any) => {
          this.toastService.error(`${error?.error?.message}`);
        });
      }
    });
  }

}
