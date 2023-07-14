import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socialaccount',
  templateUrl: './socialaccount.component.html',
  styleUrls: ['./socialaccount.component.css'],
})
export class SocialaccountComponent {
  @Input() platformName!: string;
}
