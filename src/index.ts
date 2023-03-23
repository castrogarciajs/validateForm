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
    const passwordTest =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return passwordTest.test(password);
  }

  /**
   * 
   * @param number ingresa un numero de telefono
   * @returns devuelve un boolean como afirmacion
   */
  static validatePhone(number: string) {
    const phoneNumberTest = /^\d{10}$/;
    return phoneNumberTest.test(number);
  }
}

export { Validator };
