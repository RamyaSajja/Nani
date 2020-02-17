import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { CartComponent } from '../cart/cart.component';




const routes: Routes = [{ path: "header", component: HeaderComponent },
{ path: "home", component: HomeComponent },
{ path: "", component: HomeComponent },
{ path: "about", component: AboutComponent },
{ path: "service", component: ServiceComponent },
{ path: "cart", component: CartComponent },
{ path: "body", component: BodyComponent },
{ path: "footer", component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ECartModule { }
export const routingcomponents = [HeaderComponent, BodyComponent, FooterComponent];
