import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contentcomponent } from './contentcomponent';

describe('Contentcomponent', () => {
  let component: Contentcomponent;
  let fixture: ComponentFixture<Contentcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Contentcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Contentcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
