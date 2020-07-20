import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  refreshTime: string;
  timeFrameArray: Date[];

  ngOnInit() {
  }

  save() {
      localStorage.setItem("timeFrame", this.timeFrameArray[0]+"-"+this.timeFrameArray[1]);
      localStorage.setItem("refreshTime",  this.refreshTime);
  }
}
