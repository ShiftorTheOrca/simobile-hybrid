import { Service } from '@angular/core';
import { Keranjang } from './keranjang';
import { Products } from './products';
@Service()
export class Transaksi {
    constructor(private productService: Products, private cartService: Keranjang) {}
    cart = this.cartService.cart
    products = this.productService.products

    transaksi = [
    {
        id_transaksi: "1",
        tanggal: new Date(2026, 8, 28, 10, 15),
        items: [
            { id_product: "1", name: "Banoffee Original", harga: 30000, jumlah: 2 },
            { id_product: "9", name: "teh", harga: 10000, jumlah: 2 }
        ],
        total: 80000
    },
    {
        id_transaksi: "2",
        tanggal: new Date(2026, 8, 29, 13, 40),
        items: [
            { id_product: "4", name: "Ayam Geprek", harga: 13000, jumlah: 3 },
            { id_product: "6", name: "Nasi Putih", harga: 2000, jumlah: 3 },
            { id_product: "10", name: "kopi", harga: 12670, jumlah: 1 }
        ],
        total: 57670
    },
    {
        id_transaksi: "3",
        tanggal: new Date(2026, 8, 30, 19, 5),
        items: [
            { id_product: "7", name: "Rendang", harga: 50000, jumlah: 2 },
            { id_product: "6", name: "Nasi Putih", harga: 2000, jumlah: 2 },
            { id_product: "9", name: "teh", harga: 10000, jumlah: 2 }
        ],
        total: 124000
    },
    {
        id_transaksi: "4",
        tanggal: new Date(2026, 9, 2, 8, 30),
        items: [
            { id_product: "2", name: "Banoffee Oreo", harga: 32000, jumlah: 1 },
            { id_product: "3", name: "Banoffee Extra Coffee", harga: 31000, jumlah: 1 },
            { id_product: "8", name: "Strawfee", harga: 30000, jumlah: 1 }
        ],
        total: 93000
    },
    {
        id_transaksi: "5",
        tanggal: new Date(2026, 9, 3, 12, 20),
        items: [
            { id_product: "5", name: "Cumi Hytam Pak Kris", harga: 15000, jumlah: 2 },
            { id_product: "6", name: "Nasi Putih", harga: 2000, jumlah: 2 },
            { id_product: "10", name: "kopi", harga: 12670, jumlah: 2 }
        ],
        total: 59340
    },
    {
        id_transaksi: "6",
        tanggal: new Date(2026, 9, 3, 15, 10),
        items: [
            { id_product: "1", name: "Banoffee Original", harga: 30000, jumlah: 3 },
            { id_product: "10", name: "kopi", harga: 12670, jumlah: 2 }
        ],
        total: 115340
    },
    {
        id_transaksi: "7",
        tanggal: new Date(2026, 9, 3, 18, 45),
        items: [
            { id_product: "4", name: "Ayam Geprek", harga: 13000, jumlah: 2 },
            { id_product: "6", name: "Nasi Putih", harga: 2000, jumlah: 2 },
            { id_product: "9", name: "teh", harga: 10000, jumlah: 2 }
        ],
        total: 50000
    },
    {
        id_transaksi: "8",
        tanggal: new Date(2026, 9, 4, 9, 0),
        items: [
            { id_product: "7", name: "Rendang", harga: 50000, jumlah: 1 },
            { id_product: "6", name: "Nasi Putih", harga: 2000, jumlah: 1 },
            { id_product: "10", name: "kopi", harga: 12670, jumlah: 1 }
        ],
        total: 64670
    },
    {
        id_transaksi: "9",
        tanggal: new Date(2026, 9, 4, 11, 30),
        items: [
            { id_product: "2", name: "Banoffee Oreo", harga: 32000, jumlah: 2 },
            { id_product: "8", name: "Strawfee", harga: 30000, jumlah: 1 },
            { id_product: "9", name: "teh", harga: 10000, jumlah: 1 }
        ],
        total: 104000
    },
    {
        id_transaksi: "10",
        tanggal: new Date(2026, 9, 4, 13, 15),
        items: [
            { id_product: "5", name: "Cumi Hytam Pak Kris", harga: 15000, jumlah: 3 },
            { id_product: "4", name: "Ayam Geprek", harga: 13000, jumlah: 1 },
            { id_product: "6", name: "Nasi Putih", harga: 2000, jumlah: 4 },
            { id_product: "9", name: "teh", harga: 10000, jumlah: 3 }
        ],
        total: 96000
    },
  ];

  addTransaksi(p_id: string, p_tanggal: Date, p_items: any[], p_total: number) {
    this.transaksi.push({
      id_transaksi: p_id,
      tanggal: p_tanggal,
      items: p_items,
      total: p_total
    })
  }

  getTransaksiById(p_id: string) {
    for (let i = 0; i < this.transaksi.length; i++) {
      if (this.transaksi[i].id_transaksi == p_id) {
        return this.transaksi[i];
      }
    }
    return null;
  }

  bayar() {
  this.addTransaksi(
    ""+(this.transaksi.length + 1),
    new Date(),
    this.cart,
    this.cartService.hitungTotalCart()
  );
  this.cartService.empty();
}
}
