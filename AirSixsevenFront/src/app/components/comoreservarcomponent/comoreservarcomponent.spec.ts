import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Comoreservarcomponent } from "./comoreservarcomponent";

describe("Comoreservarcomponent", () => {
  let component: Comoreservarcomponent;
  let fixture: ComponentFixture<Comoreservarcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Comoreservarcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Comoreservarcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
