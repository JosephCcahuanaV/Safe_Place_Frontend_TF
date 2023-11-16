import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRendersComponent } from './lista-renders.component';

describe('ListaRendersComponent', () => {
  let component: ListaRendersComponent;
  let fixture: ComponentFixture<ListaRendersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRendersComponent]
    });
    fixture = TestBed.createComponent(ListaRendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
