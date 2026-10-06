import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private obj_product: Products) { }

  ngOnInit() {
    this.product_list = this.obj_product.products;
    this.route.params.subscribe(params => {
      this.id = params['id_product'];

      // dari AI
      this.display_product = this.product_list.find(product => product.id_product == this.id);
    });
  }
}
