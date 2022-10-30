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
  users:any;
  role:any;
  // urlType = '';

  constructor(private agentServices: AgentService) { }
  // private route: ActivatedRoute

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.urlType = params['type'];
      this.getAgents();
    }

    


    /*console.log('here ajout')
    var user = JSON.parse(localStorage.getItem("user"));
    console.log("role is : ",user.role)
    this.role=user.role; */





  getAgents() {
    this.agentServices.getAgent().subscribe(
      (res: any) => {
        console.log('agents is :', res)
        this.users = res.data

        this.agents = this.users.filter(item => {
          // return this.urlType == item.role;
          return "Agent" == item.role;
        })
      }
    )
  }


 
  supprimer(id:any){
    this.agentServices.deleteAgent(id).subscribe(
      (res:any) => {
        console.log("deleted");
        this.getAgents();
      }
    )
  }

}
