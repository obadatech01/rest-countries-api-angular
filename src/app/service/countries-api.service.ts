import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  constructor(private http: HttpClient) {
  }

  getAllCountries(selected: any){
    if(selected == 'All') {
      return this.http.get('https://restcountries.com/v2/all')
    } else {
      return this.http.get(`https://restcountries.com/v2/region/${selected}`)
    }
  }

  getCountryByName(country: any){
    return this.http.get(`https://restcountries.com/v2/name/${country}`);
  }

  getCountryName(code: any){
    return this.http.get(`https://restcountries.com/v2/alpha/${code}`);
  }

  getCountryByCode(country: any){
    return this.http.get(`https://restcountries.com/v2/alpha/${country}`);
  }

}
