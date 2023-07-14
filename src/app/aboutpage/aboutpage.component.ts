import {
  Component,
  ViewChildren,
  AfterViewInit,
  QueryList,
  HostListener,
} from '@angular/core';
import { boxDataArray } from '../infoboxdata';
import { InfoboxComponent } from '../infobox/infobox.component';
import { dataArray2D } from '../infobox2data';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css'],
})
export class AboutpageComponent implements AfterViewInit {
  @ViewChildren(InfoboxComponent)
  childComponents!: QueryList<InfoboxComponent>;
  boxData = boxDataArray;
  heading3Box1 = 'EXPERIENCE';
  heading3Box2 = 'EDUCATION';
  displaySection3 = 'none';
  heading1Box1 = 'SELF-SUMMARY';

  heading3box: string[] = [this.heading3Box1, this.heading3Box2];
  array2D = dataArray2D;

  ngAfterViewInit(): void {
    this.childComponents
      .toArray()
      .slice(0, 2)
      .forEach((child) => child.HideImgIcon());
  }

  @HostListener('window:scroll')
  setDisplay() {
    this.displaySection3 = 'flex';
  }
}
