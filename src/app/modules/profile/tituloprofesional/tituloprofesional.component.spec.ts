import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloprofesionalComponent } from './tituloprofesional.component';

describe('TituloprofesionalComponent', () => {
  let component: TituloprofesionalComponent;
  let fixture: ComponentFixture<TituloprofesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloprofesionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloprofesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
