import { Validator } from "../src/index";


describe("password validate", () => {
  it("should return false", () => {
    let password = "se12";
    let result = Validator.validatePassword(password);

    expect(result).toBe(false)
  })

  it("should returun true", () => {
    let password = "Abcd123!"
    let result = Validator.validatePassword(password)

    expect(result).toBe(true)
  })
})