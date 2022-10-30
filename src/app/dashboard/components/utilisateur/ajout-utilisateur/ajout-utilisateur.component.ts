import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.css']
})
export class AjoutUtilisateurComponent implements OnInit {


  formAgent:FormGroup
  roleSelected:string="Client";
  role:any=localStorage.getItem('role')

  constructor(private formBuilder:FormBuilder,private router:Router,private agentService:AgentService) { }

  ngOnInit(): void {


    /*console.log('here ajout')
    var user = JSON.parse(localStorage.getItem("user"));
    console.log("role is : ",user.role)
    this.role=user.role; */


    this.formAgent = this.formBuilder.group({
      nom:'',
      adresse:'',
      email:'',
      password:'',
      role:'Agent',
    })

  }

  add(){
    console.log("utilisateur is ",this.formAgent.value);

    this.agentService.postAgent(this.formAgent.value).subscribe(
      (res:any) => {
        console.log("agent is : ",res);
        this.router.navigateByUrl('/home/listeAgent')
      }
    )
  }

  setAGV(){
this.roleSelected="AgentValidation"
this.formAgent.patchValue({
  role:this.roleSelected
})
  }

  setAG(){
    this.roleSelected="Agent"
    this.formAgent.patchValue({
      role:this.roleSelected
    })
      }

}
