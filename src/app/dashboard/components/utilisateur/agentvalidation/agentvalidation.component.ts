import { Component, OnInit } from '@angular/core';
import { agentvalidationService } from 'src/app/services/agentvalidation.service';
@Component({
  selector: 'app-agentvalidation',
  templateUrl: './agentvalidation.component.html',
  styleUrls: ['./agentvalidation.component.css']
})
export class AgentvalidationComponent implements OnInit {
  agentvalidations:any;
  users:any;
  role:any;


  constructor(private agentvalidationservice:agentvalidationService) { }

  ngOnInit(): void {
   
this.getagentvalidation();
  }
  getagentvalidation(){
    this.agentvalidationservice.getagentvalidation().subscribe(
      (res: any) => {
        this.users = res.data

        this.agentvalidations = this.users.filter(item => {
          return "AgentValidation" == item.role;
        })
      }
    )
  }



supprimer(id:any){
  this.agentvalidationservice.deleteagentvalidation(id).subscribe(
    (res:any) => {
      console.log("deleted");
      this.getagentvalidation();
    }
  )
}

}
