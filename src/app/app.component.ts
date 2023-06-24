import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverelementarr: {
    type: string;
    name: string;
    content: string;
  }[] = [];

  serveradded(serverdata: { sname: string; scontent: string }) {
    this.serverelementarr.push({
      type: 'server',
      name: serverdata.sname,
      content: serverdata.scontent,
    });
  }

  blueprintadded(serverdata: { sname: string; scontent: string }) {
    this.serverelementarr.push({
      type: 'blueprint',
      name: serverdata.sname,
      content: serverdata.scontent,
    });
  }
}
