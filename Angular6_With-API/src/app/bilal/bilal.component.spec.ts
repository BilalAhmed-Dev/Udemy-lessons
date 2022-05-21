import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilalComponent } from './bilal.component';

describe('BilalComponent', () => {
  let component: BilalComponent;
  let fixture: ComponentFixture<BilalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
