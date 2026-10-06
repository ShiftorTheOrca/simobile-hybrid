import { Component, OnInit } from '@angular/core';
import { Transaksi } from '../transaksi';
import { Keranjang } from '../keranjang';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
  standalone: false,
})
export class TransactionsPage implements OnInit {
  daftarTransaksi: any[] = [];

  constructor(
    public transaksiService: Transaksi,
    public keranjangService: Keranjang
  ) { }

  ngOnInit() {
    this.muatTransaksi();
  }

  ionViewWillEnter() {
    this.muatTransaksi();
  }

  muatTransaksi() {
    this.daftarTransaksi = this.transaksiService.getRiwayat();
  }

  get totalItemCart(): number {
    return this.keranjangService.hitungJumlahItem();
  }
}
