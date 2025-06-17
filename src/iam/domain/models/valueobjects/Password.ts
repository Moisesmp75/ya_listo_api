
export class Password {
  private password: string;

  constructor(password: string) {
    if (!password || password.trim().length === 0) {
      throw new Error("Password cannot be null or empty");
    }

    if (password.length < 8 || password.length > 20) {
      throw new Error("Password must be between 8 and 20 characters long");
    }

    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const digitPattern = /[0-9]/;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>_\-+=\[\]\\\/`~;]/;

    if (!uppercasePattern.test(password)) {
      throw new Error("Password must contain at least one uppercase letter");
    }

    if (!lowercasePattern.test(password)) {
      throw new Error("Password must contain at least one lowercase letter");
    }

    if (!digitPattern.test(password)) {
      throw new Error("Password must contain at least one number");
    }

    if (!specialCharPattern.test(password)) {
      throw new Error("Password must contain at least one special character");
    }

    this.password = password;
  }

  public equals(other: Password): boolean {
    return this.password === other.password;
  }

  public setPassword(password: string) { this.password = password }
}