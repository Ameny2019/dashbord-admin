import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { EstampsService } from 'src/app/services/estamps.service';
import { FleursService } from 'src/app/services/fleurs.service';

@Component({
  selector: 'app-ajout-demande',
  templateUrl: './ajout-demande.component.html',
  styleUrls: ['./ajout-demande.component.css']
})
export class AjoutDemandeComponent implements OnInit {


  formEfleur: FormGroup
  fileToUpload: Array<File> = [];
  formProduct: FormGroup;
  fileToUploadEstamps: Array<File> = [];


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private efleureService: FleursService,
    private estampsService: EstampsService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.formEfleur = this.formBuilder.group({
      nom: '',
      description: '',
      QunatityEfleurDisponible: 0
    });
    this.formProduct = this.formBuilder.group({
      sujet: '',
      reference: '',
      artiste: '',
      format: '',
      QunatityEstampDisponible: 0,
    });
  }

  add() {
    let formData = new FormData();
    formData.append("nom", this.formEfleur.value.nom);
    formData.append("description", this.formEfleur.value.description);
    formData.append("photo", this.fileToUpload[0]);
    formData.append("QunatityEfleurDisponible", this.formEfleur.value.QunatityEfleurDisponible);
    this.efleureService.postEfleur(formData).subscribe(
      (res: any) => {
        this.toastService.success(res?.message);
        this.router.navigateByUrl('/home/listProduct')
      }, (error: any) => {
        this.toastService.error(`${error?.error?.message}`);
      });
  }


  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
  }

  handleFileInputEstamps(files: any) {
    this.fileToUploadEstamps = <Array<File>>files.target.files;
  }

  addEstamps() {
    let formData = new FormData();
    formData.append("sujet", this.formProduct.value.sujet);
    formData.append("reference", this.formProduct.value.reference);
    formData.append("artiste", this.formProduct.value.artiste);
    formData.append("photo", this.fileToUploadEstamps[0]);
    formData.append("format", this.formProduct.value.format);
    formData.append("QunatityEstampDisponible", this.formProduct.value.QunatityEstampDisponible);
    this.estampsService.postEstamps(formData).subscribe(
      (res: any) => {
        this.toastService.success(res?.message);
        this.router.navigateByUrl('/home/listProduct')
      }, (error: any) => {
        this.toastService.error(`${error?.error?.message}`);
      });
  }



}

