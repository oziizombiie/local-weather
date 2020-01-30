import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from "../interfaces";


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current:ICurrentWeather;
  constructor( ) {
    
    this.current = {
      city:'Ciudad de Mexico',
      country:'Mexico',
      date: new Date,
      image: 'assets/img/sunrise.svg',
      temperature: 72,
      description: 'sunny'
    } as ICurrentWeather
    console.log(this.current);
  }

  ngOnInit() {
  }

}
