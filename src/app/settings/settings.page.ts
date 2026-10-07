import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage {
  isDarkMode: boolean = false;

  constructor() { }

  toggleDarkMode() {
    document.documentElement.classList.toggle('ion-palette-dark', this.isDarkMode);
  }
}
