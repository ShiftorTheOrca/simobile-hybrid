import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaksi } from '../../transaksi';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false,
})
export class DetailPage implements OnInit {
  id_transaksi: string = '';
  transaksi: any = null;

  constructor(
    private route: ActivatedRoute,
    private transaksiService: Transaksi
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id_transaksi = params['id_transaksi'];
      this.transaksi = this.transaksiService.getTransaksiById(this.id_transaksi);
    });
  }
}
