import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { EstampsService } from 'src/app/services/estamps.service';

@Component({
  selector: 'app-update-estamp',
  templateUrl: './update-estamp.component.html',
  styleUrls: ['./update-estamp.component.css']
})
export class UpdateEstampComponent implements OnInit {
  formProduct: FormGroup;
  fileToUpload: Array<File> = [];
  id: string;

  constructor(private activated: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private estampsService: EstampsService,
    private toastService: ToastService,
    ) { }

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
      this.formProduct.patchValue(res?.data)
    })
  }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
  }

  addEstamps() {
    const updateForm = this.formProduct.value;
    let formData: any = new FormData();
    Object.keys(updateForm).forEach((fieldName) => {
      formData.append(fieldName, updateForm[fieldName]);
    });
    if (this.fileToUpload.length>0) {
      formData.append("photo", this.fileToUpload[0], this.fileToUpload[0].name);
    }
    this.estampsService.updateEstamp(formData, this.id).subscribe(
      (response: any) => {
        this.toastService.success(response?.message);
        this.router.navigateByUrl('/home/listDemande')
      }, (error: any) => {
        this.toastService.error(`${error?.error?.message}`);
      })
  }

}

