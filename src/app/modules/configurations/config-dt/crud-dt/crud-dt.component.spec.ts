import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDTComponent } from './crud-dt.component';

describe('CrudDTComponent', () => {
  let component: CrudDTComponent;
  let fixture: ComponentFixture<CrudDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
