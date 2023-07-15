import { Component, Input, OnInit } from '@angular/core';
import { serverDataInterface } from '../serverDataInterface';
import { SampleApiService } from '../sample-api.service';

@Component({
  selector: 'app-sample-api-data',
  templateUrl: './sample-api-data.component.html',
  styleUrls: ['./sample-api-data.component.css'],
})
export class SampleApiDataComponent implements OnInit {
  serverDataArr!: serverDataInterface[];

  constructor(private apiData: SampleApiService) {}

  ngOnInit(): void {
    this.apiData.getData().subscribe((data) => {
      this.serverDataArr = data;
    });
  }
}
