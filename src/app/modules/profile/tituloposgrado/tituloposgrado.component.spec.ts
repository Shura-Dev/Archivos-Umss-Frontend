import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloposgradoComponent } from './tituloposgrado.component';

describe('TituloposgradoComponent', () => {
  let component: TituloposgradoComponent;
  let fixture: ComponentFixture<TituloposgradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloposgradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloposgradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
