import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecioxdiaComponent } from './precioxdia.component';

describe('PrecioxdiaComponent', () => {
  let component: PrecioxdiaComponent;
  let fixture: ComponentFixture<PrecioxdiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecioxdiaComponent]
    });
    fixture = TestBed.createComponent(PrecioxdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
