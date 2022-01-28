import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomasBachillerComponent } from './diplomas-bachiller.component';

describe('DiplomasBachillerComponent', () => {
  let component: DiplomasBachillerComponent;
  let fixture: ComponentFixture<DiplomasBachillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomasBachillerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomasBachillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
