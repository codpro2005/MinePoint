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
        function: 'aboutUsSilasZahnerFunction',
        description: 'aboutUsSilasZahnerDescription'
      },
      {
        img: '../../assets/compressed/about-us/christian-fuchs.jpeg',
        name: 'aboutUsChristianFuchs',
        function: 'aboutUsChristianFuchsFunction',
        description: 'aboutUsChristianFuchsDescription'
      },
      {
        img: '../../assets/compressed/about-us/danilo-furrer.jpeg',
        name: 'aboutUsDaniloFurrer',
        function: 'aboutUsDaniloFurrerFunction',
        description: 'aboutUsDaniloFurrerDescription'
      },
      {
        img: '../../assets/compressed/about-us/kajendran-pulendran.jpeg',
        name: 'aboutUsKajendranPulendran',
        function: 'aboutUsKajendranPulendranFunction',
        description: 'aboutUsKajendranPulendranDescription'
      },
      {
        img: '../../assets/compressed/about-us/chris-wolf.jpeg',
        name: 'aboutUsChrisWolf',
        function: 'aboutUsChrisWolfFunction',
        description: 'aboutUsChrisWolfDescription'
      },
      {
        img: '../../assets/compressed/about-us/nils-chapman.jpeg',
        name: 'aboutUsNilsChapman',
        function: 'aboutUsNilsChapmanFunction',
        description: 'aboutUsNilsChapmanDescription'
      },
      {
        img: '../../assets/compressed/about-us/gregor-muheim.jpeg',
        name: 'aboutUsGregorMuheim',
        function: 'aboutUsGregorMuheimFunction',
        description: 'aboutUsGregorMuheimDescription'
      }
    ];
  }

}
