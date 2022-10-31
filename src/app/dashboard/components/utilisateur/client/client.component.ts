import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { SweetAlertService } from 'src/app/providers/sweet-alert.service';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: any;
  users: any;
  constructor(private agentServices: AgentService,
    private toastService: ToastService,
    private sweetAlertService: SweetAlertService,) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.agentServices.getAgent().subscribe(
      (res: any) => {
        this.users = res.data
        this.clients = this.users.filter(item => {
          return "Client" == item.role;
        })
      }
    )
  }

  supprimer(id:any){
    this.sweetAlertService.deleteConfirmation().then((result) => {
      if (result.value) {
        this.agentServices.deleteAgent(id).subscribe((response: any) => {
          this.toastService.success(response?.message);
          this.getClients();
        }, (error: any) => {
          this.toastService.error(`${error?.error?.message}`);
        });
      }
    });
  }

}
