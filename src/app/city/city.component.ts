import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService  } from './../weather.service';
import { City } from './../city';

@Component({
	selector: 'app-city',
	templateUrl: './city.component.html',
	styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit {

	city: City;

	constructor(private _route: ActivatedRoute, private _weatherService: WeatherService) {
		this.city = new City();
		this._route.paramMap.subscribe(params=>{
			this.city.name = params.get('city');
			console.log('This is the city:', this.city);
		})
	}

	ngOnInit() {
		this.populateCityInfo();
	}

	populateCityInfo(){
		this._weatherService.getCity(this.city).then((data)=>{
			console.log("then: ", data);
			this.city.name = data.name;
			this.city.humidity = data.main.humidity;
			this.city.avg_temperature = data.main.temp;
			this.city.high_temperature = data.main.temp_max;
			this.city.low_temperature = data.main.temp_min;
			this.city.status = data.weather[0].description;
			console.log("data retrieved:", this.city);
		})
		.catch((error)=>{
			console.log(error);
		})
		this.city = new City();		
	}
}
