import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SearchComponent } from './search/search.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { FilterComponent } from './filter/filter.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DeliveryInfComponent } from './delivery-inf/delivery-inf.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'search', component: SearchComponent },
  { path: 'my-order', component: MyOrderComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'delivery-inf', component: DeliveryInfComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'shopping-cart', pathMatch: 'full' },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: '', redirectTo: 'my-order', pathMatch: 'full' },
  { path: '', redirectTo: 'filter', pathMatch: 'full' },
  { path: '', redirectTo: 'about-us', pathMatch: 'full' },
  { path: '', redirectTo: '/shopping-cart', pathMatch: 'full' },
];
``


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

