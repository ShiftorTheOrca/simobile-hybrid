import { Component } from '@angular/core';
import { Products } from '../products';
import { Transaksi } from '../transaksi';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(private productService: Products, private transaksiService: Transaksi) {}
  totalProduk = this.productService.products.length;
  totalTransaksiToday = this.transaksiService.totalTransaksiToday();
  namaProdukTerlaris = this.transaksiService.produkTerlaris().name;


}
