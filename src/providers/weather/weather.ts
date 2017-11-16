import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '99dfe35fcb7de1ee';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = '/api/'+this.apiKey+'/conditions/q';
  }

  getWeather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
      //.map(res => res.json()); not in Angular 5 now.
  }

}
