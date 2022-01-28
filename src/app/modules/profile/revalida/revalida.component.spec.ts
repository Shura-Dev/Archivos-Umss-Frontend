import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevalidaComponent } from './revalida.component';

describe('RevalidaComponent', () => {
  let component: RevalidaComponent;
  let fixture: ComponentFixture<RevalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
