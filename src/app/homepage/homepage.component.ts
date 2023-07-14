import {
  AfterViewInit,
  Component,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { boxDataArray } from '../infoboxdata';
import { InfoboxComponent } from '../infobox/infobox.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements AfterViewInit {
  @ViewChildren(InfoboxComponent)
  chldComponentElement!: QueryList<InfoboxComponent>;

  boxData = boxDataArray;
  startIndex = 2;

  keyFrameString: string =
    '-LATEST WORK AND FEATURED -LATEST WORK AND FEATURED -LATEST WORK AND FEATURED -LATEST WORK AND FEATURED -LATEST WORK AND FEATURED-LATEST WORK AND FEATURED -LATEST WORK AND FEATURED';

  ngAfterViewInit() {
    const infoBoxInstance1 = this.chldComponentElement.toArray()[0];
    const infoBoxInstance4 = this.chldComponentElement.toArray()[4];
    infoBoxInstance1.setflag();
    infoBoxInstance4.setflag();
  }
}
