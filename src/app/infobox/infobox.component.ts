import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { infoboxcontent } from '../infobox';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css'],
})
export class InfoboxComponent {
  @Input() boxContent!: infoboxcontent;
  flag: boolean = false;
  displayContent = 'none';

  constructor(private cdr: ChangeDetectorRef) {}

  setflag() {
    this.flag = true;
    this.cdr.detectChanges();
  }
}
