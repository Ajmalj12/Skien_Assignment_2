import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', redirectTo: '' } 
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideClientHydration(),
    provideRouter(routes)
  ]
};