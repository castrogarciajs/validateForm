import { Validator } from "../src/index";

describe("validate phone number", () => {
  it("should return false", () => {
    let phone = "3041";
    let result = Validator.validatePhone(phone);

    expect(result).toBe(false);
  });

  it("should return true", () => {
    let phone = "3044176141";
    let result = Validator.validatePhone(phone)

    expect(result).toBe(true)
  })
});
