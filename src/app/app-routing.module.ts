import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAccountComponent } from './auth-account/auth-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component'
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OffCanvasComponent } from './off-canvas/off-canvas.component';
import { RecipeselectComponent } from './recipeselect/recipeselect.component';
import { BoxNumberComponent } from './box-number/box-number.component';
import { EmailsectionComponent } from './emailsection/emailsection.component';
import { DeliverboxComponent } from './deliverbox/deliverbox.component';
import { CheckComponent } from './check/check.component';
import { AboutComponent } from './about/about.component';
import { FinalpayComponent } from './finalpay/finalpay.component';
import { OffersComponent } from './offers/offers.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'auth-account', component: AuthAccountComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'LOGIN', component: DashboardComponent, canActivate: [AuthGuard]},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'home',component:HomeComponent,canActivate: [AuthGuard]},
  {path:'details/:recipe_id',component:ProductdetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'menu',component:MenuComponent},
  {path:'checkout',component:CheckOutComponent},
  {path:'offcanvas',component:OffCanvasComponent},
  {path:'boxnumber',component:BoxNumberComponent},
  {path:'recipselect',component:RecipeselectComponent},
  {path:'emailsection',component:EmailsectionComponent},
  {path:'deliverbox',component:DeliverboxComponent},
  {path:'check',component:CheckComponent},
  {path:'about',component:AboutComponent},
  {path:'finalpay',component:FinalpayComponent},
  {path:'offers',component:OffersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
