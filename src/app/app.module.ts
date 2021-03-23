import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProtectComponent } from './components/protect/protect.component';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProtectComponent,
    HomeComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AuthModule.forRoot({
    domain: 'dev-c5m7iuok.eu.auth0.com',
    clientId: '9OKAcFpS3HtHLkCaSozdDrowmhq5Yx3b'})
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
