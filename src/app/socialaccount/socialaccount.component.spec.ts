import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialaccountComponent } from './socialaccount.component';

describe('SocialaccountComponent', () => {
  let component: SocialaccountComponent;
  let fixture: ComponentFixture<SocialaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialaccountComponent]
    });
    fixture = TestBed.createComponent(SocialaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
