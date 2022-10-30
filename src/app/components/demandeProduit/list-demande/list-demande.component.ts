import { Component, OnInit } from '@angular/core';
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

  estamps:any
  fleurs: any

  constructor(private estampsService:EstampsService,
    private fleurservice: FleursService,
    private productService: ProductService,


    ) { }

  ngOnInit(): void {
this.getEstamps();
this.getfleurs();
  }

  getEstamps(){
    this.estampsService.getEstampsNon().subscribe(
      (res:any) => {
        console.log("estamps is ",res);
        this.estamps=res;
      }
    )
  }

  supprimerEstamps(id){


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.estampsService.deleteEstamps(id).subscribe(
          (res:any) => {
            console.log("deleted");
            this.getEstamps();
          }
        )

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })     


  }

  getfleurs() {
    this.fleurservice.getEfleursNon().subscribe(
      (res: any) => {
        console.log("fleur:", res)
        this.fleurs = res;

      }
    )
  }

  supprimer(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.fleurservice.deleteEfleur(id).subscribe(
          (res:any) => {
            console.log("deleted");
            this.getfleurs();
          }
        )

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })    

  }

  async validateEstamp(estamps:any){
    const { value: text } = await Swal.fire({
      imageUrl: 'http://localhost:3000/'+estamps.photo,
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
      console.log("estamps to product is ",estamps);

      let estampsProduct = await {
        productId:estamps._id,
        estamp:estamps._id,
        price:text,
        producType:"estamp"
      }

      this.productService.postproduct(estampsProduct).subscribe((res:any) => {
        console.log("product is :",res);
        //Swal.fire(res.data)
      })
    }

    this.estampsService.updateEtatEstamp(estamps._id).subscribe((res:any)=>{
      console.log("res is :",res);
      this.getEstamps();

      
    })

  }


  async validateEfleur(efleur:any) {

    const { value: text } = await Swal.fire({
      imageUrl: 'http://localhost:3000/'+efleur.photo,
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

      console.log("efleur to product is ",efleur);
      

      let efleurProduct = await {
        productId:efleur._id,
        efleur:efleur._id,
        price:text,
        photo:efleur.photo,
        producType:"efleur",
      }

      this.productService.postproduct(efleurProduct).subscribe((res:any) => {
        console.log("product is :",res);
        this.getfleurs();
        //Swal.fire(res.data)
       
        // sera supprimé aprés la validation 
    
this.fleurservice.updateEtatEfleur(efleur._id).subscribe((res:any)=>{
  console.log("res is :",res);
  this.getfleurs();
})
      })
    }

  }

  

}
