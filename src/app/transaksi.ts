import { Injectable } from '@angular/core';
import { Keranjang } from './keranjang';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class Transaksi {
  constructor(
    public productService: Products,
    public cartService: Keranjang
  ) {}

  get cart() {
    return this.cartService.cart;
  }

  get products() {
    return this.productService.products;
  }

    transaksi = [
        {
            id_transaksi: "1",
            tanggal: new Date(),
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
            tanggal: new Date(2026, 9, 5, 18, 45),
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

    getRiwayat() { // salinan list transaksi, diurutkan dari yang terbaru
        return this.transaksi.slice().sort((a, b) => new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime());
    }

    bayar() {
        // salin item cart ke array baru, biar transaksi tidak ikut berubah waktu cart dikosongkan
        let cart = this.cartService.cart;
        let items = [];
        for (let i = 0; i < cart.length; i++) {
            items.push({
                id_product: cart[i].id_product,
                name: cart[i].name,
                harga: cart[i].harga,
                jumlah: cart[i].jumlah
            });
        }
        let id_baru = "" + (this.transaksi.length + 1);
        this.addTransaksi(
            id_baru,
            new Date(),
            items,
            this.cartService.hitungTotalCart()
        );
        this.cartService.empty();
        return id_baru;
    }
    totalTransaksiToday() {
        let currentDate = new Date();
        let totalTransaksi = 0;
        for(let i = 0; i<this.transaksi.length;i++){
            let tDate = new Date(this.transaksi[i].tanggal);
            if (currentDate.getDate() == tDate.getDate()
                && currentDate.getMonth() == tDate.getMonth()
                && currentDate.getFullYear() == tDate.getFullYear()
            ){
                totalTransaksi ++;
            }
        }
        return totalTransaksi;
    }

    produkTerlaris() { // kalo pakai DB tinggal group by, ini mbuat list produk baru lagi, cek item dalam tiap transaksi, terus update list produk(push / update qty)
    let penjualan: { id_product: string, name: string, jumlah: number }[] = [];
    for (let i = 0; i < this.transaksi.length; i++) {
        for (let j = 0; j < this.transaksi[i].items.length; j++) {
            let item = this.transaksi[i].items[j];
            let ketemu = false;

            for (let k = 0; k < penjualan.length; k++) {
                if (penjualan[k].id_product == item.id_product) {
                    penjualan[k].jumlah += item.jumlah;
                    ketemu = true;
                }
            }

            if (!ketemu) {
                penjualan.push({
                    id_product: item.id_product,
                    name: item.name,
                    jumlah: item.jumlah
                });
            }
        }
    }

    let terlaris = penjualan[0]; // langsung set di produk 0 biar langsung cek [1]
    for (let i = 1; i < penjualan.length; i++) {
        if (penjualan[i].jumlah > terlaris.jumlah) {
            terlaris = penjualan[i];
        }
    }

    return terlaris; //dalam bentuk {id,nama,jumlah}
}
}
