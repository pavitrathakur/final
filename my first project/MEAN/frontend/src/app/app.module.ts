import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CoffepageComponent } from './coffepage/coffepage.component';
import { TitleComponent } from './title/title.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputContainerComponent } from './input-container/input-container.component';
import { InputValidationComponent } from './input-validation/input-validation.component';
import { TextInputComponent } from './text-input/text-input.component';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { CartPageComponent } from './cartpage/cartpage.component';
import { RegisterPageComponent } from './registerpage/registerpage.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingInterceptor } from './shared/interceptor/loading.interceptor';
import { OrderItemsListComponent } from './order-items-list/order-items-list.component';
import { MapComponent } from './map/map.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CheckoutPageComponent } from './checkout/checkout.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { PaypalButtonComponent } from './paypal-button/paypal-button.component';
import { OrderTrackPageComponent } from './order-track-page/order-track-page.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CheckoutPageComponent,
    NavbarComponent,
    SearchComponent,
    TagsComponent,
    CoffepageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    CartPageComponent,
    RegisterPageComponent,
    LoadingComponent,
    OrderItemsListComponent,
    MapComponent,
    PaymentPageComponent,
    PaypalButtonComponent,
    OrderTrackPageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-top-left',
      newestOnTop:false
    })
  ],
  providers: [

    {
      provide:HTTP_INTERCEPTORS ,useClass:AuthInterceptor,multi:true
    },
    {
      provide:HTTP_INTERCEPTORS ,useClass:LoadingInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
