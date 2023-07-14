import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { infoboxcontent } from '../infobox';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css'],
})
export class InfoboxComponent {
  @Input() boxContent!: infoboxcontent;
  @Input() boxType?: string = 'default';
  hideIcon = false;

  constructor(private cdr: ChangeDetectorRef) {}

  HideImgIcon() {
    this.hideIcon = true;
    this.cdr.detectChanges();
  }
}
