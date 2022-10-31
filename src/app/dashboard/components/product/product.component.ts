import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { SweetAlertService } from 'src/app/providers/sweet-alert.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService,
    private toastService: ToastService,
    private sweetAlertService: SweetAlertService,) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getproduct().subscribe((res: any) => {
      this.products = res.data;
    })
  }

  deleteProduct(id_product: any) {
    this.sweetAlertService.deleteConfirmation().then((result) => {
      if (result.value) {
        this.productService.deleteproduct(id_product).subscribe((response: any) => {
          this.toastService.success(response?.message);
          this.getProducts();
        }, (error: any) => {
          this.toastService.error(`${error?.error?.message}`);
        });
      }
    });
  }

}
