import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: any;
  users: any;
  constructor(private agentServices: AgentService) { }

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
    this.agentServices.deleteAgent(id).subscribe(
      (res:any) => {
        this.getClients();
      }
    )
  }

}
