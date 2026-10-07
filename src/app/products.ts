import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Products {
    // TODO: Steve, ak sementara ws buat iki buat ngetes real-time search e
    // TODO: Kalo ada perubahan, tolong di-sync mbe search e

    // TODO Steve: kategori tak ganti jadi makanan, minuman, sama dessert
    // sama kamu mau nama service ne kene pake inggris atau indo

    products = [
        {
            id_product: "1",
            name: "Banoffee Original",
            category: "dessert",
            description: "ini coba nulis deskripsi sg ga terlalu panjang.",
            purchase_price: 12000,
            sale_price: 30000,
            stock: 40,
            url: "https://instagram.fsub8-2.fna.fbcdn.net/v/t51.82787-15/715059441_17885228718574911_6127236036921071559_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&_nc_map=urlgen_bucketless&ig_cache_key=MzkxMjc3NTEwMzI4NDgyNzI2Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTM1MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=iKzf5CNlzP8Q7kNvwH3rwHb&_nc_oc=AdrrxWZxxqP3Y-Wy2mda_CGp0tQ0IxP1i1hhygBCLi2mnOG-zWrYQzFqAPnqmKr5p98&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsub8-2.fna&_nc_gid=78q0wsT1AF5FGx1l9hBC5g&_nc_ss=7a22e&oh=00_AQPVxkyVuknic_wIHRJIA6-QAKppjm9S2UTXjnmRDn0uqQ&oe=6AC3DF90",
        },
        {
            id_product: "2",
            name: "Banoffee Oreo",
            category: "dessert",
            description: "deskripsi lagi sg rodok lebih panjang dari sebelum e, tapi ak gatau mau nulis apa. ",
            purchase_price: 15000,
            sale_price: 32000,
            stock: 25,
            url: "https://katalog.nurasouvenir.com/assets/images/product-placeholder.png",
        },
        {
            id_product: "3",
            name: "Banoffee Extra Coffee",
            category: "dessert",
            description: "jadi ceritanya ini harus e mau nyoba nulis deskripsi (lagi) sg paling panjang. Masalah e, ak ga pinter dalam ngarang sesuatu sg panjang (see more: nilai KBI-ku C dengan NA 59). Jadi aku nulis tulisan rodok gblg kek gini biar panjang. ",
            purchase_price: 13000,
            sale_price: 31000,
            stock: 10,
            url: "https://katalog.nurasouvenir.com/assets/images/product-placeholder.png",
        },
        {
            id_product: "4",
            name: "Ayam Geprek",
            category: "makanan",
            description: "Geprek'e Marita oenak tpi skrg mahal",
            purchase_price: 9000,
            sale_price: 13000,
            stock: 50,
            url: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/83af0095-1626-4b1f-b0a0-11562bfbde8f_ebd9b4c9-fc38-4703-ad5b-a194a494760f_Go-Biz_20190920_090856.jpeg",
        },
        {
            id_product: "5",
            name: "Cumi Hytam Pak Kris",
            category: "makanan",
            description: "ea beli film bajakan ya?",
            purchase_price: 12000,
            sale_price: 15000,
            stock: 25,
            url: "https://preview.redd.it/self-explanatory-v0-feghu776ydf81.jpg?width=640&crop=smart&auto=webp&s=b1782492ae492927093d7b2e6816f4cac78ad5d3",
        },
        {
            id_product: "6",
            name: "Nasi Putih",
            category: "makanan",
            description: "niSi piTiH",
            purchase_price: 1000,
            sale_price: 2000,
            stock: 100,
            url: "https://akcdn.detik.net.id/visual/2019/07/09/5eb5d75b-7eae-4e9c-8a94-1b3a536891ec_169.jpeg",
        },
        {
            id_product: "7",
            name: "Rendang",
            category: "makanan",
            description: "gnadneR",
            purchase_price: 30000,
            sale_price: 50000,
            stock: 20,
            url: "https://www.astronauts.id/blog/wp-content/uploads/2023/03/Resep-Rendang-Daging-Sapi-Untuk-Lebaran-Gurih-dan-Nikmat-1024x683.jpg",
        },
        {
            id_product: "8",
            name: "Strawfee",
            category: "dessert",
            description: "ze forbiden straufi",
            purchase_price: 25000,
            sale_price: 30000,
            stock: 5,
            url: "https://katalog.nurasouvenir.com/assets/images/product-placeholder.png",
        },
        {
            id_product: "9",
            name: "teh",
            category: "minuman",
            description: "teh",
            purchase_price: 5000,
            sale_price: 10000,
            stock: 70,
            url: "https://katalog.nurasouvenir.com/assets/images/product-placeholder.png",

        },
        {
            id_product: "10",
            name: "kopi",
            category: "minuman",
            description: "banoffee gapake pisang, karamel, regal, tapi ditambahin air",
            purchase_price: 5670,
            sale_price: 12670,
            stock: 67, //awokawok
            url: "https://katalog.nurasouvenir.com/assets/images/product-placeholder.png",

        }


        // Tambahi lagi sampe minim 10
        // ws 10, info lek ada seng mau diganti
    ];
    placeholder = "https://katalog.nurasouvenir.com/assets/images/product-placeholder.png"
    addProduct(p_id: string, p_name: string, p_category: string,
        p_description: string, p_buy: number, p_price: number, p_stock: number, p_url: string) {
            if (p_url.trim() !== '') {
                p_url = p_url.trim();
            } else {
                p_url = this.placeholder;
            }
            this.products.push({
            id_product: p_id,
            name: p_name,
            category: p_category,
            description: p_description,
            purchase_price: p_buy,
            sale_price: p_price,
            stock: p_stock,
            url: p_url 
        })
    }
    editProduct(p_id: string, p_name: string, p_category: string,
        p_description: string, p_buy: number, p_price: number, p_stock: number, p_url: string) {

        const index = this.products.findIndex(p => p.id_product == p_id);
        if (index == -1) return false; // id tidak ditemukan

        if (p_url.trim() !== '') {
                p_url = p_url.trim();
            } else {
                p_url = this.placeholder;
            }

        this.products[index] = {
            id_product: p_id,
            name: p_name,
            category: p_category,
            description: p_description,
            purchase_price: p_buy,
            sale_price: p_price,
            stock: p_stock,
            url: p_url
        };
        return true;
    }
    kurangiStok(p_id:string,jumlah:number) { 
        const index = this.products.findIndex(p => p.id_product == p_id);
        if (index != -1)
            this.products[index].stock -= jumlah;
        
    }
    tambahStok(p_id:string,jumlah:number) { 
        const index = this.products.findIndex(p => p.id_product == p_id);
        if (index != -1)
            this.products[index].stock += jumlah;
    }

}
