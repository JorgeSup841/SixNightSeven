import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Preguntasfrecuentescomponent } from "./preguntasfrecuentescomponent";

describe("Preguntasfrecuentescomponent", () => {
  let component: Preguntasfrecuentescomponent;
  let fixture: ComponentFixture<Preguntasfrecuentescomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Preguntasfrecuentescomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Preguntasfrecuentescomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
