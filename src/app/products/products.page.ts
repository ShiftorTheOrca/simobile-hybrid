import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
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
  amounts: { [id_product: string]: number } = {};

  // Selalu mengambil array terbaru langsung dari service
  get productList(): any[] {
    if (!this.keywordSearch || this.keywordSearch.trim() === '') {
      return this.objProduct.products;
    }
    return this.objProduct.products.filter(product_filtered =>
      product_filtered.name.toLowerCase().includes(this.keywordSearch.toLowerCase())
    );
  }

  constructor(
    private objProduct: Products,
    public keranjangService: Keranjang,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() { }

  // Dipanggil otomatis setelah halaman produk tampil di layar
  ionViewDidEnter() {
    this.animateFab();
  }

  // animasi bounce/pop-up tombol FAB Tambah Produk
  animateFab() {
    const fabElement = document.querySelector('#fabAdd') as HTMLElement;

    if (fabElement) {
      const animation = this.animationCtrl
        .create()                                     // membuat instance animasi baru
        .addElement(fabElement)                       // elemen FAB sebagai target animasi
        .duration(600)                                // durasi animasi (ms)
        .easing('ease-out')                           // kurva transisi melambat secara natural
        .keyframes([
          { offset: 0, transform: 'scale(0)' },       // titik awal (0%): ukuran 0 (tidak tampak)
          { offset: 0.7, transform: 'scale(1.15)' },  // titik 70%: membal melebihi ukuran normal (115%)
          { offset: 1, transform: 'scale(1)' },       // titik akhir (100%): kembali jadi ukuran normal (100%)
        ]);

      animation.play();
    }
  }

  getAmount(id_product: string): number {
    if (!this.amounts[id_product] || this.amounts[id_product] < 1) {
      this.amounts[id_product] = 1;
    }
    return this.amounts[id_product];
  }

  tambahAmount(p: any) {
    const sisa = this.getSisaStok(p);
    const current = this.getAmount(p.id_product);
    if (current < sisa) {
      this.amounts[p.id_product] = current + 1;
    }
  }

  kurangAmount(p: any) {
    const current = this.getAmount(p.id_product);
    if (current > 1) {
      this.amounts[p.id_product] = current - 1;
    }
  }

  getJumlahDiCart(id_product: string): number {
    return this.keranjangService.getJumlahDiCart(id_product);
  }

  getSisaStok(p: any): number {
    const diCart = this.getJumlahDiCart(p.id_product);
    const sisa = p.stock - diCart;
    return sisa > 0 ? sisa : 0;
  }

  isMaxCart(p: any): boolean {
    return p.stock <= 0 || this.getJumlahDiCart(p.id_product) >= p.stock;
  }

  addToCart(p: any) {
    const qty = this.getAmount(p.id_product);
    if (qty > 0 && !this.isMaxCart(p)) {
      this.keranjangService.AddCart(p.id_product, p.name, p.sale_price, qty);
      this.amounts[p.id_product] = 1;
    }
  }

  get totalItemCart(): number {
    return this.keranjangService.hitungJumlahItem();
  }
}
