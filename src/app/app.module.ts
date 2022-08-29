import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './services/authentication.service';
import { VerifyEmailAddressComponent } from './verify-email-address/verify-email-address.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthAccountComponent } from './auth-account/auth-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {  HttpClientModule } from '@angular/common/http';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { SwiperModule } from 'swiper/angular';
import { CheckOutComponent } from './check-out/check-out.component';
import { OffCanvasComponent } from './off-canvas/off-canvas.component';
import { BoxNumberComponent } from './box-number/box-number.component';
import { RecipeselectComponent } from './recipeselect/recipeselect.component';
import { EmailsectionComponent } from './emailsection/emailsection.component';
import { DeliverboxComponent } from './deliverbox/deliverbox.component';
import { CheckComponent } from './check/check.component';
import { AboutComponent } from './about/about.component';
import { FinalpayComponent } from './finalpay/finalpay.component';
import { FooterComponent } from './footer/footer.component';
import { OffersComponent } from './offers/offers.component';








@NgModule({
  declarations: [
    AppComponent,
    VerifyEmailAddressComponent,
    DashboardComponent,
    AuthAccountComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    NavbarComponent,
    ProductdetailsComponent,
    CartComponent,
    MenuComponent,
    CheckOutComponent,
    OffCanvasComponent,
    BoxNumberComponent,
    RecipeselectComponent,
    EmailsectionComponent,
    DeliverboxComponent,
    CheckComponent,
    AboutComponent,
    FinalpayComponent,
    FooterComponent,
    OffersComponent,
    
   
   
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule,

 

    RouterModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    
    BrowserAnimationsModule
    

  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
