import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//Rutas
import { APP_ROUTING } from './app.routes'
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { OfferComponent } from './components/offer/offer.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { PricesComponent } from './components/prices/prices.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfferComponent,
    CharacteristicsComponent,
    PricesComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    NgxPaginationModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
