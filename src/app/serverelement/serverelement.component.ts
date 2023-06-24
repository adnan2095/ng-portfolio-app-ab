import { Component, Input } from '@angular/core';
//import { servelement } from './servinterface';

@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css'],
})
export class ServerelementComponent {
  @Input() serverelement!: {
    type: string;
    name: string;
    content: string;
  };

  constructor() {}
}
