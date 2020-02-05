import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICurrentWeather } from '../interfaces';

interface ICurrentWeatherData {
  weather: [{
    description: string;
    icon: string;
  }]
  main: {
    temp: number;
  }
  sys: {
    country: string;
  }
  dt: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})


export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string, country: string):Observable<ICurrentWeather> {
    return this.http.get<ICurrentWeatherData>(`${environment.baseURL}api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`)
    .pipe(
      map( data => this.convertCurrentWeatherDataToCurrentWeather(data) )
    )
  }

  private convertCurrentWeatherDataToCurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      image:  `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      description: data.weather[0].description,
      temperature: data.main.temp,
      date: data.dt * 1000
    }
  }
}
