import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDiplomasComponent } from './lista-diplomas.component';

describe('ListaDiplomasComponent', () => {
  let component: ListaDiplomasComponent;
  let fixture: ComponentFixture<ListaDiplomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDiplomasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDiplomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
