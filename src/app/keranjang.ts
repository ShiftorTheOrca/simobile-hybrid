import { inject, Service } from '@angular/core';
import { Products } from './products';
@Service()
export class Keranjang {
    private productService = inject(Products);
    cart = [
    {
        id_product: "1",
        name: "Banoffee Original",
        harga: 30000,
        jumlah: 2
    },
    {
        id_product: "6",
        name: "Nasi Putih",
        harga: 2000,
        jumlah: 3
    },
    {
        id_product: "9",
        name: "teh",
        harga: 10000,
        jumlah: 1
    },
];
    products = this.productService.products;

    AddCart(p_id: string,p_name:string,p_price:number, qty: number) {
        // kalau produk sudah ada di cart, cukup tambah jumlahnya
        for(let i = 0; i<this.cart.length;i++){
            if (this.cart[i].id_product == p_id) {
                this.cart[i].jumlah += qty;
                return;
            }
        }
        this.cart.push({ id_product: p_id, name:p_name,harga:p_price, jumlah: qty });
    }
    tambahJumlah(p_id: string) {
        for(let i = 0; i<this.cart.length;i++){
            if (this.cart[i].id_product == p_id) {
                this.cart[i].jumlah++;
            }
        }
    }
    kurangiJumlah(p_id: string) { // kalau jumlah jadi 0, item dihapus dari cart
        for(let i = 0; i<this.cart.length;i++){
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
        for(let i = 0; i<this.cart.length;i++){
            if (this.cart[i].id_product == p_id) {
                this.cart.splice(i, 1);
                return;
            }
        }
    }
    empty(){ //kalo transaksi jalan ini buat ngosongin cart sekalian ngurangi stok
        for(let i = 0; i<this.cart.length;i++){
            this.productService.kurangiStok(this.cart[i].id_product,this.cart[i].jumlah)
        }
        // splice(0) mengosongkan array yang sama, jadi halaman yang pegang referensi cart ikut kosong
        this.cart.splice(0);
    }
    hitungSubtotal(item: { harga: number, jumlah: number }) {
        return item.harga * item.jumlah;
    }
    hitungJumlahItem() { // total qty semua item, buat badge keranjang
        let jumlah = 0;
        for(let i = 0; i<this.cart.length;i++){
            jumlah += this.cart[i].jumlah;
        }
        return jumlah;
    }
    hitungTotalCart(){ //ngitung total dalem cart pake metode zaman purba
        let total = 0;
        for(let i = 0; i<this.cart.length;i++){
            total += this.cart[i].harga * this.cart[i].jumlah
        }
        return total;
    }
}
