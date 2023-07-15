import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThmbuttonComponent } from './thmbutton.component';

describe('ThmbuttonComponent', () => {
  let component: ThmbuttonComponent;
  let fixture: ComponentFixture<ThmbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThmbuttonComponent]
    });
    fixture = TestBed.createComponent(ThmbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
