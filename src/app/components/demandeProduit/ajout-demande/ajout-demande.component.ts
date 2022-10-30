import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EstampsService } from 'src/app/services/estamps.service';
import { FleursService } from 'src/app/services/fleurs.service';

@Component({
  selector: 'app-ajout-demande',
  templateUrl: './ajout-demande.component.html',
  styleUrls: ['./ajout-demande.component.css']
})
export class AjoutDemandeComponent implements OnInit {


  formEfleur:FormGroup
  fileToUpload: Array<File> = [];

  formProduct:FormGroup;
  fileToUploadEstamps: Array<File> = [];


  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private efleureService:FleursService,
    private estampsService:EstampsService
    ) { }

  ngOnInit(): void {
    this.formEfleur = this.formBuilder.group({
      nom:'',
      description:'',
      QunatityEfleurDisponible:0
    })


    this.formProduct = this.formBuilder.group({
      sujet:'',
      reference:'',
      artiste:'',
      format:'',
      QunatityEstampDisponible:0,      
    })


  }

  add(){

    console.log("estamps is like :",this.formEfleur.value)
    let formData = new FormData();
    formData.append("nom", this.formEfleur.value.nom);
    formData.append("description", this.formEfleur.value.description);
    formData.append("photo", this.fileToUpload[0]);
    formData.append("QunatityEfleurDisponible", this.formEfleur.value.QunatityEfleurDisponible);


    this.efleureService.postEfleur(formData).subscribe(
      (res:any) => {
        console.log("product :",res);
        this.router.navigateByUrl('/home/listeefleure')
      }
    )  

  }


  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

  handleFileInputEstamps(files: any) {
    this.fileToUploadEstamps = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

  addEstamps(){
    console.log("estamps is like :",this.formProduct.value)
    console.log("file is ",this.fileToUpload[0]);
    
    let formData = new FormData();
    formData.append("sujet", this.formProduct.value.sujet);
    formData.append("reference", this.formProduct.value.reference);
    formData.append("artiste", this.formProduct.value.artiste);
    formData.append("photo", this.fileToUploadEstamps[0]);
    formData.append("format", this.formProduct.value.format);
    formData.append("QunatityEstampDisponible", this.formProduct.value.QunatityEstampDisponible);


    this.estampsService.postEstamps(formData).subscribe(
      (res:any) => {
        console.log("product :",res);
        this.router.navigateByUrl('/home/listeProduit')
      }
    )  }



}

