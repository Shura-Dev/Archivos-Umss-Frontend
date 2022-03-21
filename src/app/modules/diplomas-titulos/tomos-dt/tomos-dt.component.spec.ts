import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomosDtComponent } from './tomos-dt.component';

describe('TomosDtComponent', () => {
  let component: TomosDtComponent;
  let fixture: ComponentFixture<TomosDtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomosDtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomosDtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
