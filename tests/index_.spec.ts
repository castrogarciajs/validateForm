import { Validator } from "../src/index";

describe("validator", () => {
  it("should instance", () => {
    const validator = new Validator();

    expect(validator instanceof Validator).toBe(true);
  });
});
