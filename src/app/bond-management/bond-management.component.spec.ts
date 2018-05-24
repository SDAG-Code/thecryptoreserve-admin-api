import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondManagementComponent } from './bond-management.component';

describe('BondManagementComponent', () => {
  let component: BondManagementComponent;
  let fixture: ComponentFixture<BondManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
