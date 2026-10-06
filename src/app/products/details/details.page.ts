import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { Products } from '../../products';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: false,
})
export class DetailsPage implements OnInit {

  product_list: any[] = []
  id: number = 0
  display_product = this.product_list[0];
  constructor(
    private route: ActivatedRoute,
    private obj_product: Products,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    this.product_list = this.obj_product.products;
    this.route.params.subscribe(params => {
      this.id = params['id_product'];

      // dari AI
      this.display_product = this.product_list.find(product => product.id_product == this.id);
    });
  }

  ionViewWillEnter() {
    this.animatePageEnter();
  }

  animatePageEnter() {
    const cardEl = document.querySelector('#detailCard') as HTMLElement;
    if (cardEl) {
      const animation = this.animationCtrl
        .create()                                                     // membuat instance animasi baru
        .addElement(cardEl)                                           // elemen kartu sebagai target animasi
        .duration(450)                                                // durasi animasi (ms)
        .easing('ease-out')                                           // kurva transisi melambat secara natural
        .keyframes([
          { offset: 0, opacity: '0', transform: 'translateY(40px)' }, // titik awal (0%): transparan dan geser ke bawah 40px
          { offset: 1, opacity: '1', transform: 'translateY(0px)' }   // titik akhir (100%): terlihat penuh di posisi normal
        ]);
      animation.play();
    }
  }
}
