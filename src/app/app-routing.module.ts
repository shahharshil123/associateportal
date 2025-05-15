import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ManageuserComponent } from './components/manageuser/manageuser.component';
import { ManagesupervisorComponent } from './components/managesupervisor/managesupervisor.component';
import { ManagepscemailComponent } from './components/managepscemail/managepscemail.component';

const routes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent },
  { path: 'order-details/:id', component: OrderDetailsComponent },
  { path: 'manage-user', component: ManageuserComponent },
  { path: 'manage-supervisors', component: ManagesupervisorComponent },
  { path: 'manage-psc-emails', component: ManagepscemailComponent },
  { path: '**', redirectTo: 'orders' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
