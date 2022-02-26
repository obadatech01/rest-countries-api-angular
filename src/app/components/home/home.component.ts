import { CountriesApiService } from './../../service/countries-api.service';
import { CustomThemeService } from './../../service/custom-theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selected: any= 'All';
  countries!: Array<any>;
  formatN = new Intl.NumberFormat('en-US');
  searchCountry: string = '';

  constructor(public customThemeService: CustomThemeService, public countriesApiService: CountriesApiService) {
    this.getAllCountries();
  }

  ngOnInit(): void {
  }

  changeSearch() {
    this.getSearchCountry();
  }

  getSearchCountry() {
    if(this.searchCountry.length == 0) {
      this.getAllCountries();
    } else if(this.searchCountry.length > 0) {
      this.countries = this.countries.filter(data => data.name.toLowerCase().includes(this.searchCountry.toLowerCase()));
    }
  }

  getAllCountries() {
    this.countriesApiService.getAllCountries(this.selected).subscribe((data: any) => {
      this.countries = data;
    })
  }

}
