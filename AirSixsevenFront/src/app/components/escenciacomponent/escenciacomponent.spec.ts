import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Escenciacomponent } from "./escenciacomponent";

describe("Escenciacomponent", () => {
  let component: Escenciacomponent;
  let fixture: ComponentFixture<Escenciacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Escenciacomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Escenciacomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
