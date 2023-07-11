import { Component } from '@angular/core';
import { boxDataArray } from '../infoboxdata';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css'],
})
export class AboutpageComponent {
  boxData = boxDataArray;
}
