import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Pagarservicioscomponent } from "./pagarservicioscomponent";

describe("Pagarservicioscomponent", () => {
  let component: Pagarservicioscomponent;
  let fixture: ComponentFixture<Pagarservicioscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pagarservicioscomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Pagarservicioscomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
