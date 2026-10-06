import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../../products';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  standalone: false,
})
export class FormPage implements OnInit {
  isEdit: boolean = false;
  id_product: string = '';

  // Data input form (Two-way data binding [(ngModel)])
  name: string = '';
  category: string = 'makanan';
  purchase_price: number | null = null;
  sale_price: number | null = null;
  stock: number | null = null;
  description: string = '';
  url: string = '';

  // Pesan error validasi
  errorName: string = '';
  errorPurchasePrice: string = '';
  errorSalePrice: string = '';
  errorStock: string = '';

  // Pop-up dialog
  isAlertOpen: boolean = false;
  alertButtons = ['OK'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private objProduct: Products
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id_product = params['id_product'];

      // Jika ada id_product di URL, berarti mode edit
      if (this.id_product) {
        this.isEdit = true;

        // Cari produk berdasarkan ID, lalu load data dalam form edit
        for (let p of this.objProduct.products) {
          if (p.id_product == this.id_product) {
            this.name = p.name;
            this.category = p.category;
            this.purchase_price = p.purchase_price;
            this.sale_price = p.sale_price;
            this.stock = p.stock;
            this.description = p.description;
            this.url = p.url;
            break;
          }
        }
      }
    });
  }

  // Fungsi validasi saat user mengetik
  checkName() {
    if (!this.name || this.name.trim() == '') {
      this.errorName = 'Nama produk wajib diisi.';
    } else {
      this.errorName = '';
    }
  }

  checkPurchasePrice() {
    if (!this.purchase_price) {
      this.errorPurchasePrice = 'Harga beli wajib diisi.';
    } else if (this.purchase_price <= 0) {
      this.errorPurchasePrice = 'Harga beli harus lebih dari 0.';
    } else {
      this.errorPurchasePrice = '';
    }
  }

  checkSalePrice() {
    if (!this.sale_price) {
      this.errorSalePrice = 'Harga jual wajib diisi.';
    } else if (this.sale_price <= 0) {
      this.errorSalePrice = 'Harga jual harus lebih dari 0.';
    } else {
      this.errorSalePrice = '';
    }
  }

  checkStock() {
    if (this.stock == null || this.stock == undefined) {
      this.errorStock = 'Stok produk wajib diisi.';
    } else if (this.stock < 0) {
      this.errorStock = 'Stok tidak boleh negatif.';
    } else {
      this.errorStock = '';
    }
  }

  saveProduct() {
    // Jalankan semua validasi saat tombol ditekan
    this.checkName();
    this.checkPurchasePrice();
    this.checkSalePrice();
    this.checkStock();

    // Jika masih ada error, jangan lanjut simpan
    if (this.errorName || this.errorPurchasePrice || this.errorSalePrice || this.errorStock) {
      return;
    }

    // Jika URL foto kosong, gunakan gambar placeholder default
    const fotoUrl = (this.url && this.url.trim() !== '') 
      ? this.url.trim() 
      : 'https://katalog.nurasouvenir.com/assets/images/product-placeholder.png';

    // Simpan ke service
    if (this.isEdit) {
      this.objProduct.editProduct(
        this.id_product,
        this.name,
        this.category,
        this.description,
        this.purchase_price!,
        this.sale_price!,
        this.stock!,
        fotoUrl
      );
    } else {
      const newId = (this.objProduct.products.length + 1).toString();
      this.objProduct.addProduct(
        newId,
        this.name,
        this.category,
        this.description,
        this.purchase_price!,
        this.sale_price!,
        this.stock!,
        fotoUrl
      );
    }

    // Tampilkan notifikasi berhasil
    this.isAlertOpen = true;
  }

  onAlertDismiss() {
    this.isAlertOpen = false;
    this.router.navigate(['/products']);
  }
}
