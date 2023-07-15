import { Component, OnInit } from '@angular/core';
import { dataArray3 } from '../infobox2data';
import { boxDataArray } from '../infoboxdata';
import { SampleApiService } from '../sample-api.service';
import { serverDataInterface } from '../serverDataInterface';
@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css'],
})
export class ContactpageComponent implements OnInit {
  CPagedataArray = dataArray3;
  iconTypeArray: string[] = ['dribbble', 'insta', 'twitter'];
  infoBox1Array = boxDataArray;
  heading1Content = "Let's Work";
  spanContent = 'together';

  inputDataArray = [
    {
      type: 'text',
      placehold: 'Name',
    },
    {
      type: 'email',
      placehold: 'Email',
    },
    {
      type: 'text',
      placehold: 'Your Subject',
    },
    {
      type: 'text',
      placehold: 'Enter Your Message',
    },
  ];

  serverDataArray!: serverDataInterface[];

  constructor(private temp: SampleApiService) {}

  ngOnInit(): void {}

  onclk() {
    console.log('clicked');
    this.temp.getSampleDatafromServer().subscribe((data) => {
      this.serverDataArray = data.data;
      this.temp.sendData(this.serverDataArray);
    });
  }
}
