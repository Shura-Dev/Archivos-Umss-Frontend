import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCountriesComponent } from './create-countries.component';

describe('CreateCountriesComponent', () => {
  let component: CreateCountriesComponent;
  let fixture: ComponentFixture<CreateCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
