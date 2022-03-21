import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTomoComponent } from './edit-tomo.component';

describe('EditTomoComponent', () => {
  let component: EditTomoComponent;
  let fixture: ComponentFixture<EditTomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTomoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
