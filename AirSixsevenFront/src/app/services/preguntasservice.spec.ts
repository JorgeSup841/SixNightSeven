import { TestBed } from "@angular/core/testing";
import { Preguntasservice } from "./preguntasservice";

describe("Preguntasservice", () => {
  let service: Preguntasservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Preguntasservice);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
