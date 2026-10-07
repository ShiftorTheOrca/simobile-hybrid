import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
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
    public keranjangService: Keranjang,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    this.muatTransaksi();
  }

  ionViewWillEnter() {
    this.muatTransaksi();
    this.animateList();
  }

  animateList() {
    const listEl = document.querySelector('#transactionList') as HTMLElement;
    if (listEl) {
      const animation = this.animationCtrl
        .create()
        .addElement(listEl)
        .duration(400)
        .easing('ease-out')
        .keyframes([
          { offset: 0, opacity: '0', transform: 'translateY(20px)' },
          { offset: 1, opacity: '1', transform: 'translateY(0px)' }
        ]);
      animation.play();
    }
  }

  muatTransaksi() {
    this.daftarTransaksi = this.transaksiService.getRiwayat();
  }

  get totalItemCart(): number {
    return this.keranjangService.hitungJumlahItem();
  }
}
