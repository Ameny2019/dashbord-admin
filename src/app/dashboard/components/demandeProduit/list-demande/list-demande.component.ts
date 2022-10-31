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
    this.getProductsToApprouve();
  }

  getProductsToApprouve() {
    this.estampsService.getProductsToApprouve().subscribe(
      (res: any) => {
        this.estamps = res?.listEStampsToApprouve;
        this.fleurs = res?.listEfleursToApprouve;
      }
    )
  }

  supprimerEstamps(id: any) {
    this.sweetAlertService.deleteConfirmation().then((result) => {
      if (result.value) {
        this.estampsService.deleteEstamps(id).subscribe((response: any) => {
          this.toastService.success(response?.message);
          this.getProductsToApprouve();
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
          this.getProductsToApprouve();
        }, (error: any) => {
          this.toastService.error(`${error?.error?.message}`);
        });
      }
    });
  }

  async validateEstamp(estamps: any) {
    this.sweetAlertService.showApprovementAlert(estamps.photo, estamps.price).then((result) => {
      if (result.value) {
        // approve the current efleur
        const productData = {
          price: result.value,
          producType: "estamp",
          estamp: estamps._id,
          quantity: result.value,
        }
        this.createProductAndApprouveSubProduct(productData, estamps._id);

        // this.estampsService.updateEtatEstamp(estamps._id).subscribe((res: any) => {
        //   console.log("res is :", res);
        //   this.getProductsToApprouve();
        // });
      }
    });

    //  Old code
    // const { value: text } = await Swal.fire({
    //   imageUrl: estamps.photo,
    //   imageWidth: 200,
    //   imageHeight: 200,
    //   input: 'number',
    //   //inputLabel: 'Prix',
    //   inputPlaceholder: 'Tapez votre prix ici...',
    //   inputAttributes: {
    //     'aria-label': 'Tapez votre prix ici'
    //   },
    //   showCancelButton: true
    // })

    // if (text) {
    //   console.log("estamps to product is ", estamps);

    //   let estampsProduct = {
    //     productId: estamps._id,
    //     estamp: estamps._id,
    //     price: text,
    //     producType: "estamp"
    //   }

    //   this.productService.postproduct(estampsProduct).subscribe((res: any) => {
    //     console.log("product is :", res);
    //     //Swal.fire(res.data)
    //   })
    // }

    // this.estampsService.updateEtatEstamp(estamps._id).subscribe((res: any) => {
    //   console.log("res is :", res);
    //   this.getProductsToApprouve();


    // })

  }

  validateEfleur(efleur: any) {
    this.sweetAlertService.showApprovementAlert(efleur.photo, efleur.price).then((result) => {
      if (result.value) {
        // approve the current efleur
        const productData = {
          price: result.value,
          producType: "efleur",
          efleur: efleur._id,
          quantity: result.value,
        }
        this.createProductAndApprouveSubProduct(productData, efleur._id);

        // this.productService.createProduct(efleurProduct).subscribe((res: any) => {
        //   console.log("product is :", res);
        //   this.getProductsToApprouve();
        //   // sera supprimé aprés la validation
        //   this.fleurservice.updateEtatEfleur(efleur._id).subscribe((res: any) => {
        //     console.log("res is :", res);
        //     this.getProductsToApprouve();
        //   })
        // })
      }
    });
  }

  // le subProductId est un ID d'une la collection :
  createProductAndApprouveSubProduct(productData: any, subProductId: any) {
    this.productService.createProduct(productData, subProductId)
      .subscribe((response: any) => {
        this.toastService.success(response?.message);
        this.getProductsToApprouve();
      }, (error: any) => {
        this.toastService.error(`${error?.error?.message}`);
      })
  }

}
