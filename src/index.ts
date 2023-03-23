class Validator {
  /**
   *
   * @param email ingresa un correo electronico
   * @returns devuelve un booelan como afirmacion
   */
  static validateEmail(email: string): boolean {
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailTest.test(email);
  }

  /**
   *
   * @param password ingresa una contraseña
   * @returns devuelve un boolean como afirmacion
   */
  static validatePassword(password: string): boolean {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return passwordRegex.test(password);
  }

  static validatePhone(number: string) {}
}

export { Validator };
