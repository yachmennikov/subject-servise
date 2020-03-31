import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/servises/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  isWhite = true;
  isBlue = false;
  isYellow = false;
  isPink = false;

  constructor(private settingsServise: SettingsService) { }

  ngOnInit() {
  }

  toggleColorValue(event: any) {
    if (event.target.value === 'blue') {
      this.isBlue = !this.isBlue;
      if (this.isBlue === true) {
        this.isWhite = false;
        this.isYellow = false;
        this.isPink = false;
        this.settingsServise.changeSearchInputBackground('blue');
      }
    } else if (event.target.value === 'white') {
      this.isWhite = !this.isWhite;
      if (this.isWhite === true) {
        this.isBlue = false;
        this.isYellow = false;
        this.isPink = false;
        this.settingsServise.changeSearchInputBackground('#fff');
      }
    } else if (event.target.value === 'yellow') {
      this.isYellow = !this.isYellow;
      if (this.isYellow === true) {
        this.isBlue = false;
        this.isWhite = false;
        this.isPink = false;
        this.settingsServise.changeSearchInputBackground('yellow');
      }
    } else {
      this.isPink = !this.isPink;
      if (this.isPink === true) {
        this.isBlue = false;
        this.isWhite = false;
        this.isYellow = false;
        this.settingsServise.changeSearchInputBackground('pink');
      }
    }
  }

}
