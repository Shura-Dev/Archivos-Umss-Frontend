import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDigitalComponent } from './table-digital.component';

describe('TableDigitalComponent', () => {
  let component: TableDigitalComponent;
  let fixture: ComponentFixture<TableDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
