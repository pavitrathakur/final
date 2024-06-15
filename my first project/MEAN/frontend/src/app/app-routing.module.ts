import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './checkout/checkout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CoffepageComponent } from './coffepage/coffepage.component';

import { TitleComponent } from './title/title.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { InputContainerComponent } from './input-container/input-container.component';
import { InputValidationComponent } from './input-validation/input-validation.component';
import { CartPageComponent } from './cartpage/cartpage.component';
import {  RegisterPageComponent } from './registerpage/registerpage.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { OrderTrackPageComponent } from './order-track-page/order-track-page.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'search/:searchTerm', component: WelcomeComponent },
  { path: 'tag/:tag', component: WelcomeComponent },
  { path: 'coffe/:id', component: CoffepageComponent },
  { path: 'cartpage', component: CartPageComponent },
  { path: 'inputcontainer', component: InputContainerComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'checkout', component: CheckoutPageComponent ,canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'tag', component: TagsComponent },
  { path: 'title', component: TitleComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'inputvalidation', component: InputValidationComponent },
  { path: 'registerpage', component:RegisterPageComponent },
  { path: 'payment', component:PaymentPageComponent ,canActivate:[AuthGuard] },
  { path: 'track/:orderId', component:OrderTrackPageComponent ,canActivate:[AuthGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
