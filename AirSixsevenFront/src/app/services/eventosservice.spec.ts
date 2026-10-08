import { TestBed } from "@angular/core/testing";
import { Eventosservice } from "./eventosservice";

describe("Eventosservice", () => {
  let service: Eventosservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Eventosservice);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
