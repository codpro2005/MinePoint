import { Component, OnInit } from '@angular/core';
import { Member } from 'src/data/member';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  public members: Member[];

  constructor() { }

  ngOnInit() {
    this.members = [
      {
        img: '../../assets/compressed/about-us/silas-zahner.jpeg',
        name: 'aboutUsSilasZahner',
        description: 'aboutUsSilasZahnerDescription'
      },
      {
        img: '../../assets/compressed/about-us/christian-fuchs.jpeg',
        name: 'aboutUsChristianFuchs',
        description: 'aboutUsChristianFuchsDescription'
      },
      {
        img: '../../assets/compressed/about-us/danilo-furrer.jpeg',
        name: 'aboutUsDaniloFurrer',
        description: 'aboutUsDaniloFurrerDescription'
      },
      {
        img: '../../assets/compressed/about-us/chris-wolf.jpeg',
        name: 'aboutUsChrisWolf',
        description: 'aboutUsChrisWolfDescription'
      },
      {
        img: '../../assets/compressed/about-us/nils-chapman.jpeg',
        name: 'aboutUsNilsChapman',
        description: 'aboutUsNilsChapmanDescription'
      },
      {
        img: '../../assets/compressed/about-us/kajendran-pulendran.jpeg',
        name: 'aboutUsKajendranPulendran',
        description: 'aboutUsKajendranPulendranDescription'
      },
      {
        img: '../../assets/compressed/about-us/gregor-muheim.jpeg',
        name: 'aboutUsGregorMuheim',
        description: 'aboutUsGregorMuheimDescription'
      }
    ];
  }

}
