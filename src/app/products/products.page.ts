import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { Keranjang } from '../keranjang';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: false,
})
export class ProductsPage implements OnInit {

  keywordSearch: string = "";
  productList: any[] = [];
  constructor(
    private objProduct: Products,
    private keranjangService: Keranjang
  ) { }

  ngOnInit() {
    this.productList = this.objProduct.products
  }

  searchProducts(){
    // dari AI
    this.productList = this.objProduct.products.filter(
      // list produk = cari produk dgn nama yang mengandung [x] dari list utama (lower case biar ga case-sensitive)
      product_filtered => product_filtered.name.toLowerCase().includes(this.keywordSearch.toLowerCase())
    );
  }

  addToCart(p: any) {
    this.keranjangService.AddCart(p.id_product, p.name, p.sale_price, 1);
  }
}
