import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

import { registerLocaleData } from "@angular/common";
import  localeMX   from "@angular/common/locales/es-MX";
import { WeatherService } from './weather/weather.service';

import { HttpClientModule } from "@angular/common/http";

registerLocaleData(localeMX);

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
