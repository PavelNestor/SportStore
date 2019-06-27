import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { StoreFirstGuard } from "./storeFirst.guard";
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './admin/auth.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard] },
  { path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard] },
  // { path: '**', redirectTo: '/store' },
  {
    path: 'admin',
    loadChildren: 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [StoreFirstGuard],
  exports: [RouterModule]
})

export class AppRoutingModule { }
