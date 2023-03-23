import { Validator } from "../src/index";

describe("validate email", () => {
  it("should return true", () => {
    let email = "johancs@gmail.com";
    let result = Validator.validateEmail(email);

    expect(result).toBe(true);
  });

  it("should return false", () => {
    let email = "johancs";
    let result = Validator.validateEmail(email);

    expect(result).toBe(false);
  });
})