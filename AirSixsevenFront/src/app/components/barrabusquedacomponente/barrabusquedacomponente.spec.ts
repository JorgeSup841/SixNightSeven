import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Barrabusquedacomponente } from './barrabusquedacomponente';

describe('Barrabusquedacomponente', () => {
  let component: Barrabusquedacomponente;
  let fixture: ComponentFixture<Barrabusquedacomponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Barrabusquedacomponente],
    }).compileComponents();

    fixture = TestBed.createComponent(Barrabusquedacomponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
