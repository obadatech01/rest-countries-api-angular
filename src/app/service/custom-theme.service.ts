import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomThemeService {
  theme: string= 'light'

  constructor() {
    document.body.style.backgroundColor = '#e9e8e8';
  }

  toggleTheme = () => {
    this.theme === 'light' ? this.theme = 'dark' : this.theme = 'light'
    if(this.theme == 'light') {
      document.body.style.backgroundColor = '#e9e8e8';
    } else {
      document.body.style.backgroundColor = '#202c37';
    }
  };
}

/*
  --body-light: #e9e8e8;
  --body-dark: #202c37;
*/
