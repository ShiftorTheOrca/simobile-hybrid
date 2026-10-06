import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keranjang } from '../../keranjang';
import { Transaksi } from '../../transaksi';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage implements OnInit {
  idBaru: string = '';

  public alertButtons = [
    {
      text: 'OK',
      handler: () => {
        if (this.idBaru) {
          this.router.navigate(['/transactions/detail', this.idBaru]);
        }
      }
    }
  ];

  constructor(
    public keranjangService: Keranjang,
    private transaksiService: Transaksi,
    private router: Router
  ) { }

  ngOnInit() {
  }

  get cart() {
    return this.keranjangService.cart;
  }

  hitungSubtotal(item: any): number {
    return this.keranjangService.hitungSubtotal(item);
  }

  hitungTotal(): number {
    return this.keranjangService.hitungTotalCart();
  }

  tambah(id_product: string) {
    this.keranjangService.tambahJumlah(id_product);
  }

  kurang(id_product: string) {
    this.keranjangService.kurangiJumlah(id_product);
  }

  hapus(id_product: string) {
    this.keranjangService.hapusItem(id_product);
  }

  konfirmasi() {
    if (this.cart.length > 0) {
      this.idBaru = this.transaksiService.bayar();
    }
  }
}
