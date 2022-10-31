import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FleursService } from 'src/app/services/fleurs.service';

@Component({
  selector: 'app-update-efleur',
  templateUrl: './update-efleur.component.html',
  styleUrls: ['./update-efleur.component.css']
})
export class UpdateEfleurComponent implements OnInit {
  efleur: any;
  formEfleur: FormGroup
  id: string;
  fileToUpload: Array<File> = [];

  constructor(private activated: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private efleureService: FleursService) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params['idEfleur'];
    this.formEfleur = this.formBuilder.group({
      nom: '',
      description: '',
      QunatityEfleurDisponible: 0
    })
    this.getEfleurById();
  }

  getEfleurById() {
    this.efleureService.getFleurById(this.id).subscribe((res: any) => {
      this.efleur = res.data;
      this.formEfleur.patchValue({
        nom: this.efleur.nom,
        description: this.efleur.description,
        photo: this.efleur.photo,
        QunatityEfleurDisponible: this.efleur.QunatityEfleurDisponible
      })
    })
  }
  
  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
  }

  update() {
    this.efleureService.updateEfleur(this.formEfleur.value, this.id).subscribe(
      (res: any) => {
        this.router.navigateByUrl('/home/listDemande')
      }
    )
  }



}
