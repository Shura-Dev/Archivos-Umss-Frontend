import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTomoComponent } from './create-tomo.component';

describe('CreateTomoComponent', () => {
  let component: CreateTomoComponent;
  let fixture: ComponentFixture<CreateTomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTomoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
