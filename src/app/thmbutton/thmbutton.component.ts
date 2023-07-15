import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thmbutton',
  templateUrl: './thmbutton.component.html',
  styleUrls: ['./thmbutton.component.css'],
})
export class ThmbuttonComponent {
  @Input() buttonTitle: string = 'none';
}
