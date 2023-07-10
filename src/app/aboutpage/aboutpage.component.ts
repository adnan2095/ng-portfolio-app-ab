import { Component } from '@angular/core';
import { boxdataarray } from '../infoboxdata';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css'],
})
export class AboutpageComponent {
  boxdata = boxdataarray;
}
