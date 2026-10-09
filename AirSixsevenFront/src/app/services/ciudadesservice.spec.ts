import { TestBed } from "@angular/core/testing";
import { Ciudadesservice } from "./ciudadesservice";

describe("Ciudadesservice", () => {
  let service: Ciudadesservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ciudadesservice);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
