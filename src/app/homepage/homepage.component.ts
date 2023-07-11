import {
  AfterViewInit,
  Component,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { boxdataarray } from '../infoboxdata';
import { InfoboxComponent } from '../infobox/infobox.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements AfterViewInit {
  @ViewChildren(InfoboxComponent) chcomponent!: QueryList<InfoboxComponent>;

  boxdata = boxdataarray;

  ngAfterViewInit() {
    const thcomp = this.chcomponent.toArray()[4];
    const sdiv = thcomp.getsdiv();
    sdiv.style.marginTop = '10ch';
  }
}
