import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { SweetAlertService } from 'src/app/providers/sweet-alert.service';
import { EstampsService } from 'src/app/services/estamps.service';
import { FleursService } from 'src/app/services/fleurs.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent implements OnInit {
  estamps: any;
  fleurs: any;

  constructor(private estampsService: EstampsService,
    private fleurservice: FleursService,
    private productService: ProductService,
    private toastService: ToastService,
    private sweetAlertService: SweetAlertService,
  ) { }

  ngOnInit(): void {
    this.getEstamps();
    this.getfleurs();
  }

  getEstamps() {
    this.estampsService.getEstampsNon().subscribe(
      (res: any) => {
        this.estamps = res;
      }
    )
  }

  getfleurs() {
    this.fleurservice.getEfleursNon().subscribe(
      (res: any) => {
        this.fleurs = res;
      }
    )
  }

  supprimerEstamps(id: any) {
    this.sweetAlertService.deleteConfirmation().then((result) => {
      if (result.value) {
        this.estampsService.deleteEstamps(id).subscribe((response: any) => {
          this.toastService.success(response?.message);
          this.getEstamps();
        }, (error: any) => {
          this.toastService.error(`${error?.error?.message}`);
        });
      }
    });
  }

  supprimerEfleur(id: any) {
    this.sweetAlertService.deleteConfirmation().then((result) => {
      if (result.value) {
        this.fleurservice.deleteEfleur(id).subscribe((response: any) => {
          this.toastService.success(response?.message);
          this.getfleurs();
        }, (error: any) => {
          this.toastService.error(`${error?.error?.message}`);
        });
      }
    });
  }

  async validateEstamp(estamps: any) {
    const { value: text } = await Swal.fire({
      imageUrl: estamps.photo,
      imageWidth: 200,
      imageHeight: 200,
      input: 'number',
      //inputLabel: 'Prix',
      inputPlaceholder: 'Tapez votre prix ici...',
      inputAttributes: {
        'aria-label': 'Tapez votre prix ici'
      },
      showCancelButton: true
    })

    if (text) {
      console.log("estamps to product is ", estamps);

      let estampsProduct = await {
        productId: estamps._id,
        estamp: estamps._id,
        price: text,
        producType: "estamp"
      }

      this.productService.postproduct(estampsProduct).subscribe((res: any) => {
        console.log("product is :", res);
        //Swal.fire(res.data)
      })
    }

    this.estampsService.updateEtatEstamp(estamps._id).subscribe((res: any) => {
      console.log("res is :", res);
      this.getEstamps();


    })

  }

  async validateEfleur(efleur: any) {

    const { value: text } = await Swal.fire({
      imageUrl: efleur.photo,
      imageWidth: 200,
      imageHeight: 200,
      input: 'number',
      //inputLabel: 'Prix',
      inputPlaceholder: 'Tapez votre prix ici...',
      inputAttributes: {
        'aria-label': 'Tapez votre prix ici'
      },
      showCancelButton: true
    })

    if (text) {

      console.log("efleur to product is ", efleur);


      let efleurProduct = await {
        productId: efleur._id,
        efleur: efleur._id,
        price: text,
        photo: efleur.photo,
        producType: "efleur",
      }

      this.productService.postproduct(efleurProduct).subscribe((res: any) => {
        console.log("product is :", res);
        this.getfleurs();
        //Swal.fire(res.data)

        // sera supprimé aprés la validation

        this.fleurservice.updateEtatEfleur(efleur._id).subscribe((res: any) => {
          console.log("res is :", res);
          this.getfleurs();
        })
      })
    }

  }

}
