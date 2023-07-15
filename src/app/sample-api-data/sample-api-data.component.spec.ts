import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleApiDataComponent } from './sample-api-data.component';

describe('SampleApiDataComponent', () => {
  let component: SampleApiDataComponent;
  let fixture: ComponentFixture<SampleApiDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleApiDataComponent]
    });
    fixture = TestBed.createComponent(SampleApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
