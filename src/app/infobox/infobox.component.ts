import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { infoboxcontent } from '../infobox';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css'],
})
export class InfoboxComponent {
  @Input() boxContent!: infoboxcontent;
  hideIcon = false;
  customSetting: string = 'default';
  flag2: boolean = false;
  displayContent = 'none';

  constructor(private cdr: ChangeDetectorRef) {}

  settingHomepage(str1: string) {
    this.customSetting = str1;
    this.cdr.detectChanges();
  }

  HideImgIcon() {
    this.hideIcon = true;
    this.cdr.detectChanges();
  }

  setflagAboutpage() {
    this.flag2 = true;
    this.cdr.detectChanges();
  }
}
