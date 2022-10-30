import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
// import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  agents: any;
  users: any;

  constructor(private agentServices: AgentService) { }

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
    this.agentServices.deleteAgent(id).subscribe(
      (res: any) => {
        this.getAgents();
      }
    )
  }

}
