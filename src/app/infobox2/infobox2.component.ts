import { Component, Input } from '@angular/core';
import { infobox2Interface } from '../infobox2Interface';

@Component({
  selector: 'app-infobox2',
  templateUrl: './infobox2.component.html',
  styleUrls: ['./infobox2.component.css'],
})
export class Infobox2Component {
  @Input() heading3!: string;
  @Input() infoBox2array!: infobox2Interface[];
  @Input() pageType: string = 'about';
}
