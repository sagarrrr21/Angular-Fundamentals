import { Routes } from '@angular/router';
import { App } from './app';
import { ProductComponent } from './product-component/product-component';
import { AboutComponent } from './about-component/about-component';
import { HomeComponent } from './home-component/home-component';
import { ContactComponent } from './contact-component/contact-component';

export const routes: Routes = [
  {
    path: '/',
    component: HomeComponent,
  },
  {
    path: '/products',
    component: ProductComponent,
  },
  {
    path: '/about',
    component: AboutComponent,
  },
  {
    path: '/contact',
    component: ContactComponent,
  },
];
