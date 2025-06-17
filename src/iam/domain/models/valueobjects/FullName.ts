
export class FullName {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    if (!firstName || firstName.trim().length === 0) {
      throw new Error("First name cannot be null or empty");
    }
    if (firstName.length > 20) {
      throw new Error("First name cannot be longer than 20 characters");
    }

    if (!lastName || lastName.trim().length === 0) {
      throw new Error("Last name cannot be null or empty");
    }
    if (lastName.length > 20) {
      throw new Error("Last name cannot be longer than 20 characters");
    }

    const namePattern = /^[a-zA-Z]+$/;
    if (!namePattern.test(firstName)) {
      throw new Error("First name can only contain letters");
    }
    if (!namePattern.test(lastName)) {
      throw new Error("Last name can only contain letters");
    }

    this.firstName = firstName.toLowerCase();
    this.lastName = lastName.toLowerCase();
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public equals(other: FullName): boolean {
    return this.firstName === other.firstName && this.lastName === other.lastName;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }
}
