import { Service } from '@angular/core';
import { Products } from './products';
@Service()
export class Keranjang {
    constructor(private productService: Products) {}
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
    },
];
    products = this.productService.products;

    AddCart(p_id: string,p_name:string,p_price:number, qty: number) {
        this.cart.push({ id_product: p_id, name:p_name,harga:p_price, jumlah: qty });
    }
    empty(){ //kalo transaksi jalan ini buat ngosongin cart sekalian ngurangi stok
        for(let i = 0; i<this.cart.length;i++){
            this.productService.kurangiStok(this.cart[i].id_product,this.cart[i].jumlah)
        }
        this.cart = [];
    }
    hitungTotalCart(){ //ngitung total dalem cart pake metode zaman purba
        let total = 0;
        for(let i = 0; i<this.cart.length;i++){
            total += this.cart[i].harga * this.cart[i].jumlah
        }
        return total;
    }
}
