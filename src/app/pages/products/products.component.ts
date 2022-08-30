import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';
import { Product } from './interface/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  products!: Product[];

  constructor(private productSvc: ProductsService, private shoppingCartSvc: ShoppingCartService) {}

  ngOnInit(): void {
    this.productSvc
      .getProducts()
      .pipe(tap((products: Product[]) => this.products = products))
      .subscribe();
  }

  addToCart(product: Product):void{
    this.shoppingCartSvc.updateCart(product);
  }
}
