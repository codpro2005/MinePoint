import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public backgroundLoaded: boolean;

  constructor() { }

  ngOnInit() {
  }

  public setBackgroundLoaded() {
    this.backgroundLoaded = true;
  }

}
