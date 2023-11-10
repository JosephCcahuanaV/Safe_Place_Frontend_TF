import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoRenderComponent } from './aviso-render.component';

describe('AvisoRenderComponent', () => {
  let component: AvisoRenderComponent;
  let fixture: ComponentFixture<AvisoRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisoRenderComponent]
    });
    fixture = TestBed.createComponent(AvisoRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
