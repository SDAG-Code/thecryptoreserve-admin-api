import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolderdataComponent } from './holderdata.component';

describe('HolderdataComponent', () => {
  let component: HolderdataComponent;
  let fixture: ComponentFixture<HolderdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolderdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolderdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
