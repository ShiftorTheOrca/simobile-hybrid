import { Service } from '@angular/core';
import { Products } from './products';
@Service()
export class Keranjang {
    constructor(private productService: Products) {}
    cart = [{
        id_product: "1",
        jumlah: 10
    },
    {
        id_product: "2",
        jumlah: 12
    },
    {
        id_product: "5",
        jumlah: 6
    },
    {
        id_product: "4",
        jumlah: 7
    },
    {
        id_product: "6",
        jumlah: 5
    },
    {
        id_product: "7",
        jumlah: 30
    },
    {
        id_product: "3",
        jumlah: 21
    },
    {
        id_product: "10",
        jumlah: 10
    },
    {
        id_product: "9",
        jumlah: 9
    },
    {
        id_product: "8",
        jumlah: 8
    },

];
    products = this.productService.products;

    AddCart(p_id: string, qty: number) {
        this.cart.push({ id_product: p_id, jumlah: qty });
    }
    transaksi(){ //kalo transaksi jalan ini buat ngosongin cart
        this.cart = [];
    }
    hitungTotalCart(){ //ngitung total dalem cart pake metode zaman purba
        let total = 0;
        for(let i = 0; i<this.cart.length;i++){
            for(let j = 0; j<this.products.length;j++){
                if(this.cart[i].id_product == this.products[j].id_product){
                    total += this.products[j].sale_price * this.cart[i].jumlah
                }
            }
        }
        return total;
    }
}
