import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranditemdetailsComponent } from './branditemdetails.component';

describe('BranditemdetailsComponent', () => {
  let component: BranditemdetailsComponent;
  let fixture: ComponentFixture<BranditemdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranditemdetailsComponent]
    });
    fixture = TestBed.createComponent(BranditemdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
