import { CustomThemeService } from './../../service/custom-theme.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesApiService } from '../../service/countries-api.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  country!: Array<any>;
  countryName!: Array<string>;
  borders!: Array<string>;
  bordersCountry!: Array<string>;

  constructor(public customThemeService: CustomThemeService, public countriesApiService: CountriesApiService, public activatedRoute: ActivatedRoute, private router: Router) {
    this.getCountryByName();
  }

  ngOnInit(): void {
  }

  getCountryByName() {
    this.countriesApiService.getCountryByName(this.activatedRoute.snapshot.paramMap.get('country')).subscribe((data: any) => {
      this.country = data;
      this.borders = this.country[0].borders;
      this.getCountryName(this.borders);
    })
  }

  getCountryName(borders: Array<string>) {
    borders.filter(border => {
      this.countryName = []
      this.countriesApiService.getCountryName(border).subscribe((data: any) => {
        this.countryName.push(data.name);
        if(this.countryName.length == this.borders.length){
          this.bordersCountry = this.countryName;
        }
      })
    })
  }

  borderCountry(country: any) {
    this.router.navigate(['/', country]);
    setTimeout(() => {
      this.getCountryByName();
    }, 500);
  }

}
