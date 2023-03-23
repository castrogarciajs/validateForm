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

  static validatePassword(password: string) {}

  static validatePhone(number: string) {}
}

export { Validator };
