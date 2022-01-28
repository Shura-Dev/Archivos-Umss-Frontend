import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoacademicoComponent } from './certificadoacademico.component';

describe('CertificadoacademicoComponent', () => {
  let component: CertificadoacademicoComponent;
  let fixture: ComponentFixture<CertificadoacademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoacademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoacademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
