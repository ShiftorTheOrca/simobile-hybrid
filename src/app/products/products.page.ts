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
  productList: any[] = [];
  constructor(
    private objProduct: Products, private keranjangService: Keranjang, private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    this.productList = this.objProduct.products;
  }

  ionViewWillEnter() {
    this.searchProducts();
  }

  // Lifecycle hook Ionic: Dipanggil otomatis setelah halaman produk tampil di layar
  ionViewDidEnter() {
    this.animateFab();
  }

  // Method animasi bounce/pop-up tombol FAB Tambah Produk
  animateFab() {
    // 1. Mengambil elemen FAB berdasarkan ID #fabAdd
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

  searchProducts() {
    this.productList = this.objProduct.products.filter(
      product_filtered => product_filtered.name.toLowerCase().includes(this.keywordSearch.toLowerCase())
    );
  }

  addToCart(p: any) {
    this.keranjangService.AddCart(p.id_product, p.name, p.sale_price, 1);
  }

  get totalItemCart(): number {
    return this.keranjangService.hitungJumlahItem();
  }
}
