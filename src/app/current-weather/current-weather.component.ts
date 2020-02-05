import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from "../interfaces";
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current:ICurrentWeather;
  constructor( private weather: WeatherService ) {
    console.log(this.current);
  }

  ngOnInit() {
    this.weather.getWeatherByCity('Mexico city', 'MX')
    .subscribe( (data) => this.current = data, (err) => console.log(err), () => console.log(this.current) );
  }

}
