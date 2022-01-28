import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomasTitulosComponent } from './diplomas-titulos.component';

describe('DiplomasTitulosComponent', () => {
  let component: DiplomasTitulosComponent;
  let fixture: ComponentFixture<DiplomasTitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomasTitulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomasTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
