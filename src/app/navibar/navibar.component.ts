import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.css'],
})
export class NavibarComponent implements OnInit {
  @Input() navBarType!: string;
  linksArray = [
    { linkTitle: 'Home', linkPath: '' },
    { linkTitle: 'About', linkPath: 'aboutpage' },
    { linkTitle: 'Contact', linkPath: 'contactpage' },
  ];

  displayOption = 'none';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onRouteChange();
      }
    });
  }

  onRouteChange(): void {
    this.displayOption = 'none';
    setTimeout(() => {
      this.displayOption = 'flex';
    }, 600);
  }
}
