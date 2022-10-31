import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { FleursService } from 'src/app/services/fleurs.service';

@Component({
  selector: 'app-update-efleur',
  templateUrl: './update-efleur.component.html',
  styleUrls: ['./update-efleur.component.css']
})
export class UpdateEfleurComponent implements OnInit {
  formEfleur: FormGroup;
  fileToUpload: Array<File> = [];
  id: string;

  constructor(private activated: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private efleureService: FleursService,
    private toastService: ToastService,
    ) { }

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
      this.formEfleur.patchValue(res?.data)
    })
  }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
  }

  update() {
    const updateForm = this.formEfleur.value;
    let formData: any = new FormData();
    Object.keys(updateForm).forEach((fieldName) => {
      formData.append(fieldName, updateForm[fieldName]);
    });
    if (this.fileToUpload.length>0) {
      formData.append("photo", this.fileToUpload[0], this.fileToUpload[0].name);
    }
    this.efleureService.updateEfleur(formData, this.id).subscribe(
      (response: any) => {
        this.toastService.success(response?.message);
        this.router.navigateByUrl('/home/listDemande');
      }, (error: any) => {
        this.toastService.error(`${error?.error?.message}`);
      })
  }



}
