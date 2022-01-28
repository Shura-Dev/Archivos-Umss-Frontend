import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosupletorioComponent } from './certificadosupletorio.component';

describe('CertificadosupletorioComponent', () => {
  let component: CertificadosupletorioComponent;
  let fixture: ComponentFixture<CertificadosupletorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadosupletorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadosupletorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
