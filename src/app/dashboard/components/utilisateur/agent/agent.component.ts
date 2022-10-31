import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { SweetAlertService } from 'src/app/providers/sweet-alert.service';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  agents: any;
  users: any;

  constructor(private agentServices: AgentService,
    private toastService: ToastService,
    private sweetAlertService: SweetAlertService,
  ) { }

  ngOnInit(): void {
    this.getAgents();
  }

  getAgents() {
    this.agentServices.getAgent().subscribe(
      (res: any) => {
        this.users = res.data
        this.agents = this.users.filter(item => {
          return "Agent" == item.role;
        });
      }
    )
  }

  supprimer(id: any) {
    this.sweetAlertService.deleteConfirmation().then((result) => {
      if (result.value) {
        this.agentServices.deleteAgent(id).subscribe((response: any) => {
          this.toastService.success(response?.message);
          this.getAgents();
        }, (error: any) => {
          this.toastService.error(`${error?.error?.message}`);
        });
      }
    });
  }

}
