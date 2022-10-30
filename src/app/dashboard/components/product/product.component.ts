import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts()
;    
  }

  getProducts(){
    this.productService.getproduct().subscribe((res:any) => {
      console.log("all products :",res.data);
      this.products = res.data;
    })
  }

  deleteProduct(id_product:any){


    Swal.fire({
      title: 'etes vous sure?',
      text: "La supression de cet élément est irreversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.productService.deleteproduct(id_product).subscribe((res:any)=>{
          this.getProducts();
        })

        Swal.fire(
          'Supprimé!',
          'element supprimé avec succés.',
          'success'
        )
      }
    })



  }

}
