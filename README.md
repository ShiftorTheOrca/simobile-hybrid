# SIMOBILE

Aplikasi kasir mobile Toko Makmur Jaya berbasis Ionic Angular untuk pencatatan stok produk dan transaksi penjualan offline.

## Prasyarat

- Node.js (v18 ke atas)
- Ionic CLI (`npm install -g @ionic/cli`)

## Instalasi

1. Clone repositori:
   ```bash
   git clone https://github.com/ShiftorTheOrca/simobile-hybrid.git
   cd simobile-hybrid
   ```

2. Pasang dependensi:
   ```bash
   npm install
   ```

## Menjalankan Aplikasi

Jalankan perintah berikut di direktori project:

```bash
ionic serve
```

Aplikasi dapat diakses melalui browser di `http://localhost:8100`.

## Daftar Fitur

1. Dashboard: ringkasan total produk, total transaksi hari ini, dan produk terlaris all-time.
2. Pencarian produk real-time: memfilter daftar produk saat mengetik tanpa tombol submit.
3. Detail produk: menampilkan stok, harga beli, harga jual, dan kategori menggunakan parameter route.
4. Form tambah dan edit produk: validasi input (nama wajib diisi, harga lebih dari 0, stok tidak boleh negatif) beserta pesan error.
5. Keranjang belanja: pengaturan kuantitas (+, -, hapus), pembatasan stok, serta perhitungan subtotal dan total harga.
6. Checkout transaksi: konfirmasi transaksi, pencatatan ke riwayat, dan pemotongan stok otomatis.
7. Riwayat transaksi: daftar transaksi yang diurutkan dari yang terbaru dan halaman rincian transaksi per ID.
8. Navigasi: 4 tab navigasi utama dan menu samping (drawer).
9. Tema dan mode gelap: kustomisasi tema toko (hijau-kuning) dan toggle mode gelap di Pengaturan.
10. Animasi UI: animasi interaktif pada tombol FAB, kartu detail, ringkasan transaksi, dan form dengan AnimationController.
