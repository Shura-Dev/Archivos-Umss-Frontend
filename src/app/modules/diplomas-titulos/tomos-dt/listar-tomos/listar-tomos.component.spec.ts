import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTomosComponent } from './listar-tomos.component';

describe('ListarTomosComponent', () => {
  let component: ListarTomosComponent;
  let fixture: ComponentFixture<ListarTomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTomosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
