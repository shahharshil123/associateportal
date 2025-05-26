import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ManageuserComponent } from './components/manageuser/manageuser.component';
import { ManagesupervisorComponent } from './components/managesupervisor/managesupervisor.component';
import { ManagepscemailComponent } from './components/managepscemail/managepscemail.component';
import { UsersComponent } from './components/users/users.component';
import { PscCanadaComponent } from './components/store/psc-canada/psc-canada.component';
import { USComponent } from './components/store/us/US.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'orders', component: OrdersComponent },
  { path: 'order-details/:id', component: OrderDetailsComponent },
  { path: 'manage-user', component: ManageuserComponent },
  { path: 'manage-supervisors', component: ManagesupervisorComponent },
  { path: 'manage-psc-emails', component: ManagepscemailComponent },
  { path: 'users-management', component: UsersComponent},
  { path: 'psc-canada', component: PscCanadaComponent},
  { path: 'us', component: USComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
