import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forminput',
  templateUrl: './forminput.component.html',
  styleUrls: ['./forminput.component.css'],
})
export class ForminputComponent {
  @Input() inputType!: string;
  @Input() placehold!: string;
}
