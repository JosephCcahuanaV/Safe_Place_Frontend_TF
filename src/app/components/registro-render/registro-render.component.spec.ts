import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroRenderComponent } from './registro-render.component';

describe('RegistroRenderComponent', () => {
  let component: RegistroRenderComponent;
  let fixture: ComponentFixture<RegistroRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroRenderComponent]
    });
    fixture = TestBed.createComponent(RegistroRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
