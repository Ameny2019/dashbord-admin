import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstampsService } from 'src/app/services/estamps.service';

@Component({
  selector: 'app-update-estamp',
  templateUrl: './update-estamp.component.html',
  styleUrls: ['./update-estamp.component.css']
})
export class UpdateEstampComponent implements OnInit {
  formProduct: FormGroup;
  fileToUpload: Array<File> = [];
  estamp: any;
  id: string;

  constructor(private activated: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private estampsService: EstampsService) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params['idEstamp'];
    this.formProduct = this.formBuilder.group({
      sujet: '',
      reference: '',
      artiste: '',
      format: '',
      QunatityEstampDisponible: '',
    })
    this.getEstampById();
  }

  getEstampById() {
    this.estampsService.getEstampById(this.id).subscribe((res: any) => {
      this.estamp = res.data;
      this.formProduct.patchValue({
        reference: this.estamp.reference,
        sujet: this.estamp.sujet,
        QunatityEstampDisponible: this.estamp.QunatityEstampDisponible,
        artiste: this.estamp.artiste,
        format: this.estamp.format,
      })

    })
  }

  addEstamps() {
    this.estampsService.updateEstamp(this.formProduct.value, this.id).subscribe(
      (res: any) => {
        this.router.navigateByUrl('/home/listDemande')
      }
    )
  }

}

