import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { PaymentModuleComponent } from './component/payment-module/payment-module.component';
import { ItemComponent } from './component/item/item.component';
import { RestaurantsComponent } from './component/restaurants/restaurants.component';
import { RestaurantSignupComponent } from './component/restaurant-signup/restaurant-signup.component';
import { AddRestaurantComponent } from './component/add-restaurant/add-restaurant.component';
import { RestaurantRegistrationComponent } from './component/restaurant-registration/restaurant-registration.component';
import { CustomerDataComponent } from './component/customer-data/customer-data.component';
import { CustomerDataEditComponent } from './component/customer-data-edit/customer-data-edit.component';
import { RegistereditemComponent } from './component/registereditem/registereditem.component';
import { UpdateItemComponent } from './component/update-item/update-item.component';

import { RestaurantDataComponent } from './component/restaurant-data/restaurant-data.component';
import { RestaurantdataEditComponent } from './component/restaurantdata-edit/restaurantdata-edit.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { RouteGuardService } from './service/route-guard.service';
import { HelpComponent } from './component/help/help.component';
import { CartComponent } from './component/cart/cart.component';


const routes: Routes = [
  // {path:'',component:RestaurantLoginComponent},//this is a default path
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
   {path:'logoutadmin',component:MenuComponent,canActivate:[RouteGuardService]},
  {path:'login',component:LoginComponent,canActivate:[RouteGuardService]},
  {path:'register',component:RegisterComponent,canActivate:[RouteGuardService]},
  {path:'invoice',component:InvoiceComponent,canActivate:[RouteGuardService]},
  {path:'paymentModule',component:PaymentModuleComponent,canActivate:[RouteGuardService]},
  {path:'restaurant',component:RestaurantsComponent},
  {path:'item/:id',component:ItemComponent},
  {path:'logout',component:HomeComponent,canActivate:[RouteGuardService]},
  {path:'RestaurantSignup',component:RestaurantSignupComponent},
  {path:'AddRestaurant',component:AddRestaurantComponent},
  {path: 'RegisterRestaurant', component:RestaurantRegistrationComponent},
  {path:'customeradmin',component:CustomerDataComponent,canActivate:[RouteGuardService]},
  {path:'customerEdit/:id',component:CustomerDataEditComponent,canActivate:[RouteGuardService]},
  {path:'registerItem/:id',component:RegistereditemComponent,canActivate:[RouteGuardService]},
  {path:'updateItem/:id/:rid',component:UpdateItemComponent,canActivate:[RouteGuardService]},
  {path:'restaurantEdit/:id',component:RestaurantdataEditComponent,canActivate:[RouteGuardService]},
  {path: 'restaurantadmin',component:RestaurantDataComponent,canActivate:[RouteGuardService]},
  {path:'customeradmin',component:CustomerDataComponent,canActivate:[RouteGuardService]},
  {path:'help',component:HelpComponent},
  {path:'cart',component:CartComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
