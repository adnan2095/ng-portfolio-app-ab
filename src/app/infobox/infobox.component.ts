import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { infoboxcontent } from '../infobox';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css'],
})
export class InfoboxComponent {
  @Input() boxContent!: infoboxcontent;
  @ViewChild('textdiv', { static: true }) sdiv!: ElementRef;
  flag: boolean = false;

  setflag() {
    this.flag = true;
  }
}
