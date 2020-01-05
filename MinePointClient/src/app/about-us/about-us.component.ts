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
        name: 'silasZahner',
        function: 'silasZahnerFunction',
        description: 'silasZahnerDescription'
      },
      {
        img: '../../assets/compressed/about-us/christian-fuchs.jpeg',
        name: 'christianFuchs',
        function: 'christianFuchsFunction',
        description: 'christianFuchsDescription'
      },
      {
        img: '../../assets/compressed/about-us/danilo-furrer.jpeg',
        name: 'daniloFurrer',
        function: 'daniloFurrerFunction',
        description: 'daniloFurrerDescription'
      },
      {
        img: '../../assets/compressed/about-us/kajendran-pulendran.jpeg',
        name: 'kajendranPulendran',
        function: 'kajendranPulendranFunction',
        description: 'kajendranPulendranDescription'
      },
      {
        img: '../../assets/compressed/about-us/chris-wolf.jpeg',
        name: 'chrisWolf',
        function: 'chrisWolfFunction',
        description: 'chrisWolfDescription'
      },
      {
        img: '../../assets/compressed/about-us/nils-chapman.jpeg',
        name: 'nilsChapman',
        function: 'nilsChapmanFunction',
        description: 'nilsChapmanDescription'
      },
      {
        img: '../../assets/compressed/about-us/gregor-muheim.jpeg',
        name: 'gregorMuheim',
        function: 'gregorMuheimFunction',
        description: 'gregorMuheimDescription'
      }
    ];
  }

}
