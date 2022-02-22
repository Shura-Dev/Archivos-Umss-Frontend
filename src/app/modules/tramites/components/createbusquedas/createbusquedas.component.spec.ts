import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebusquedasComponent } from './createbusquedas.component';

describe('Create2Component', () => {
  let component: CreatebusquedasComponent;
  let fixture: ComponentFixture<CreatebusquedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebusquedasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebusquedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
