import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Tarjetaalojamientocomponent } from "./tarjetaalojamientocomponent";

describe("Tarjetaalojamientocomponent", () => {
  let component: Tarjetaalojamientocomponent;
  let fixture: ComponentFixture<Tarjetaalojamientocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tarjetaalojamientocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Tarjetaalojamientocomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
