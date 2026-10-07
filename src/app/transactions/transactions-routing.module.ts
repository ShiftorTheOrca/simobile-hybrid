import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsPage } from './transactions.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionsPage
  },
  {
    path: 'cart',
    redirectTo: '/cart',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id_transaksi',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsPageRoutingModule {}
