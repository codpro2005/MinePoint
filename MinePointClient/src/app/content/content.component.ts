import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() background: string;

  constructor() { }

  ngOnInit() {
    const background = this.background;
    this.background = background ? background : 'background-image.jpg';
  }

}
