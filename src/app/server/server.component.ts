import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.componenent.css'],
})
export class ServerComponent {
  serverID = '10';
  serverST: string = '';
  nserver = false;
  servercreate = 'not Created';
  servername = '';
  bttclk = false;
  msgst = false;

  constructor() {
    setTimeout(() => {
      this.nserver = true;
    }, 2000);
    this.serverST = Math.random() > 0.5 ? 'online' : 'offline';
  }

  clickfunn() {
    this.bttclk = true;
    this.servercreate = 'Created';
    this.msgst = true;
  }

  onservname(sname: any) {
    this.servername = sname.target.value;
  }

  hidemsg() {
    this.msgst = false;
  }

  getColor() {
    return this.serverST === 'online' ? 'green' : 'red';
  }
}
