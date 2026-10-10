import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Paginanoencontradacomponent } from "./paginanoencontradacomponent";

describe("Paginanoencontradacomponent", () => {
  let component: Paginanoencontradacomponent;
  let fixture: ComponentFixture<Paginanoencontradacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paginanoencontradacomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Paginanoencontradacomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
