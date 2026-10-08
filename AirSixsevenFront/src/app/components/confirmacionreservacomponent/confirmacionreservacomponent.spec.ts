import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Confirmacionreservacomponent } from "./confirmacionreservacomponent";

describe("Confirmacionreservacomponent", () => {
  let component: Confirmacionreservacomponent;
  let fixture: ComponentFixture<Confirmacionreservacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Confirmacionreservacomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Confirmacionreservacomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
