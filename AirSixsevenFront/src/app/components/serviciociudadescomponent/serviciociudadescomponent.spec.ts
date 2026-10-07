import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Serviciociudadescomponent } from "./serviciociudadescomponent";

describe("Serviciociudadescomponent", () => {
  let component: Serviciociudadescomponent;
  let fixture: ComponentFixture<Serviciociudadescomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Serviciociudadescomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Serviciociudadescomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
