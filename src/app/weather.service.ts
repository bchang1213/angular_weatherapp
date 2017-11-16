import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

	constructor(private _http: Http) {
	}

	getCity(cityObject){
		var cityUrl = this._http.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityObject.name+"&appid=37a4d95977898ad8bce153187b2e0a5b");
		return cityUrl.map(Response=>Response.json()).toPromise();  	
	}

}
