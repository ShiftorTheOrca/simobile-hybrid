import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { Transaksi } from '../transaksi';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  constructor(private productService: Products, private transaksiService: Transaksi) {}

  ngOnInit() {
  }

  get totalProduk(): number {
    return this.productService.products.length;
  }

  get totalTransaksiToday(): number {
    return this.transaksiService.totalTransaksiToday();
  }

  get namaProdukTerlaris(): string {
    const terlaris = this.transaksiService.produkTerlaris();
    return terlaris ? terlaris.name : '-';
  }
}
