import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomosComponent } from './tomos.component';

describe('TomosComponent', () => {
  let component: TomosComponent;
  let fixture: ComponentFixture<TomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
