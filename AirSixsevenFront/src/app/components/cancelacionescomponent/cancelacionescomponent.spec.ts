import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Cancelacionescomponent } from "./cancelacionescomponent";

describe("Cancelacionescomponent", () => {
  let component: Cancelacionescomponent;
  let fixture: ComponentFixture<Cancelacionescomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cancelacionescomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Cancelacionescomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
