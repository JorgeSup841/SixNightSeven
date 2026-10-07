import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Confianzacomponent } from "./confianzacomponent";

describe("Confianzacomponent", () => {
  let component: Confianzacomponent;
  let fixture: ComponentFixture<Confianzacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Confianzacomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Confianzacomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
