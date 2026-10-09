import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Detalleeventocomponent } from "./detalleeventocomponent";

describe("Detalleeventocomponent", () => {
  let component: Detalleeventocomponent;
  let fixture: ComponentFixture<Detalleeventocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalleeventocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Detalleeventocomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
