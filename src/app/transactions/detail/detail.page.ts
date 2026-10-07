import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';
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
    private transaksiService: Transaksi,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id_transaksi = params['id_transaksi'];
      this.transaksi = this.transaksiService.getTransaksiById(this.id_transaksi);
    });
  }

  ionViewWillEnter() {
    this.animateCard();
  }

  animateCard() {
    const cardEl = document.querySelector('#detailTransactionCard') as HTMLElement;
    if (cardEl) {
      const animation = this.animationCtrl
        .create()
        .addElement(cardEl)
        .duration(450)
        .easing('ease-out')
        .keyframes([
          { offset: 0, opacity: '0', transform: 'translateY(30px)' },
          { offset: 1, opacity: '1', transform: 'translateY(0px)' }
        ]);
      animation.play();
    }
  }
}
