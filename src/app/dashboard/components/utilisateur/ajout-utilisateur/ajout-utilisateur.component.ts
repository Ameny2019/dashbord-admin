import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { AgentService } from 'src/app/services/agent.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.css']
})
export class AjoutUtilisateurComponent implements OnInit {
  formAgent: FormGroup
  roleSelected: string = "Client";

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private agentService: AgentService,
    private toastService: ToastService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.formAgent = this.formBuilder.group({
      nom: '',
      adresse: '',
      email: '',
      password: '',
      role: 'Agent',
    })

  }

  add() {
    this.agentService.postAgent(this.formAgent.value)
    .subscribe(
      (res: any) => {
        this.toastService.success(res?.message);
        this.router.navigateByUrl('/home/listeAgent')
      }, (error: any) => {
        this.toastService.error(`${error?.error?.message}`);
      }
    )
  }

  setAGV() {
    this.roleSelected = "AgentValidation"
    this.formAgent.patchValue({
      role: this.roleSelected
    })
  }

  setAG() {
    this.roleSelected = "Agent"
    this.formAgent.patchValue({
      role: this.roleSelected
    })
  }

}
