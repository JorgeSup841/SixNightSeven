import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Cierrecomponent } from "./cierrecomponent";

describe("Cierrecomponent", () => {
  let component: Cierrecomponent;
  let fixture: ComponentFixture<Cierrecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cierrecomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Cierrecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
