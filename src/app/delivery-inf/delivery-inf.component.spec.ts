import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInfComponent } from './delivery-inf.component';

describe('DeliveryInfComponent', () => {
  let component: DeliveryInfComponent;
  let fixture: ComponentFixture<DeliveryInfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryInfComponent]
    });
    fixture = TestBed.createComponent(DeliveryInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
