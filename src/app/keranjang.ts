import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
    providedIn: 'root'
})
export class Keranjang {
    constructor(public productService: Products) { }
    cart = [
        {
            id_product: "1",
            name: "Banoffee Original",
            harga: 30000,
            jumlah: 10
        },
        {
            id_product: "2",
            name: "Banoffee Oreo",
            harga: 32000,
            jumlah: 12
        },
        {
            id_product: "5",
            name: "Cumi Hytam Pak Kris",
            harga: 15000,
            jumlah: 6
        },
        {
            id_product: "4",
            name: "Ayam Geprek",
            harga: 13000,
            jumlah: 7
        },
        {
            id_product: "6",
            name: "Nasi Putih",
            harga: 2000,
            jumlah: 5
        },
        {
            id_product: "7",
            name: "Rendang",
            harga: 50000,
            jumlah: 2
        },
        {
            id_product: "3",
            name: "Banoffee Extra Coffee",
            harga: 31000,
            jumlah: 4
        },
        {
            id_product: "10",
            name: "kopi",
            harga: 12670,
            jumlah: 10
        },
        {
            id_product: "9",
            name: "teh",
            harga: 10000,
            jumlah: 9
        },
        {
            id_product: "8",
            name: "Strawfee",
            harga: 30000,
            jumlah: 3
        }
    ];

    get products() {
        return this.productService.products;
    }

    getJumlahDiCart(p_id: string): number {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id_product == p_id) {
                return this.cart[i].jumlah;
            }
        }
        return 0;
    }

    AddCart(p_id: string, p_name: string, p_price: number, qty: number) {
        const prod = this.productService.products.find(p => p.id_product == p_id);
        const maxStok = prod ? prod.stock : 999;
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id_product == p_id) {
                if (this.cart[i].jumlah + qty <= maxStok) {
                    this.cart[i].jumlah += qty;
                } else {
                    this.cart[i].jumlah = maxStok;
                }
                return;
            }
        }
        const initialQty = qty <= maxStok ? qty : maxStok;
        if (initialQty > 0) {
            this.cart.push({ id_product: p_id, name: p_name, harga: p_price, jumlah: initialQty });
        }
    }
    tambahJumlah(p_id: string) {
        const prod = this.productService.products.find(p => p.id_product == p_id);
        const maxStok = prod ? prod.stock : 999;
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id_product == p_id) {
                if (this.cart[i].jumlah < maxStok) {
                    this.cart[i].jumlah++;
                }
            }
        }
    }
    kurangiJumlah(p_id: string) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id_product == p_id) {
                this.cart[i].jumlah--;
                if (this.cart[i].jumlah <= 0) {
                    this.hapusItem(p_id);
                }
                return;
            }
        }
    }
    hapusItem(p_id: string) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id_product == p_id) {
                this.cart.splice(i, 1);
                return;
            }
        }
    }
    empty() { //kalo transaksi jalan ini buat ngosongin cart sekalian ngurangi stok
        for (let i = 0; i < this.cart.length; i++) {
            this.productService.kurangiStok(this.cart[i].id_product, this.cart[i].jumlah)
        }
        this.cart.splice(0);
    }
    hitungSubtotal(item: { harga: number, jumlah: number }) {
        return item.harga * item.jumlah;
    }
    hitungJumlahItem() {
        let jumlah = 0;
        for (let i = 0; i < this.cart.length; i++) {
            jumlah += this.cart[i].jumlah;
        }
        return jumlah;
    }
    hitungTotalCart() { //ngitung total dalem cart pake metode zaman purba
        let total = 0;
        for (let i = 0; i < this.cart.length; i++) {
            total += this.cart[i].harga * this.cart[i].jumlah
        }
        return total;
    }
}
