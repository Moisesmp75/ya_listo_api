
export class Email {
  private email: string;

  constructor(email: string) {

    if (!email || email.trim().length === 0) {
      throw new Error("Email cannot be null or empty");
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      throw new Error("Invalid email format");
    }

    // const dangerousCharactersPattern = /[<>;'"`]/;
    // if (dangerousCharactersPattern.test(email)) {
    //   throw new Error("Email contains dangerous characters");
    // }

    this.email = email;
  }

  public getValue(): string {
    return this.email;
  }

  public toString(): string {
    return this.email;
  }

  public equals(other: Email): boolean {
    return this.email === other.email;
  }
}
