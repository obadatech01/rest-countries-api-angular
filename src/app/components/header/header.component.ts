import { CustomThemeService } from './../../service/custom-theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public customThemeService: CustomThemeService) { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.customThemeService.toggleTheme();
  }

}
