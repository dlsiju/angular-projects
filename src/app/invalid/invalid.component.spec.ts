import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidComponent } from './invalid.component';

describe('InvalidComponent', () => {
  let component: InvalidComponent;
  let fixture: ComponentFixture<InvalidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidComponent]
    });
    fixture = TestBed.createComponent(InvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});