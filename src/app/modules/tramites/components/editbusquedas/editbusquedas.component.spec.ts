import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbusquedasComponent } from './editbusquedas.component';

describe('EditbusquedasComponent', () => {
  let component: EditbusquedasComponent;
  let fixture: ComponentFixture<EditbusquedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbusquedasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbusquedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
