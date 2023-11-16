import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLocales2Component } from './lista-locales2.component';

describe('ListaLocales2Component', () => {
  let component: ListaLocales2Component;
  let fixture: ComponentFixture<ListaLocales2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaLocales2Component]
    });
    fixture = TestBed.createComponent(ListaLocales2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
