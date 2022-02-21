import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDTComponent } from './config-dt.component';

describe('ConfigDTComponent', () => {
  let component: ConfigDTComponent;
  let fixture: ComponentFixture<ConfigDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigDTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
