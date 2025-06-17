
class BornDate {
  private date: Date;

  constructor(date: string) {
    if (!date) {
      throw new Error("Born date cannot be blank");
    }

    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      throw new Error("Invalid date format. Expected 'YYYY-MM-DD'");
    }

    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
      throw new Error("Invalid date");
    }

    if (parsedDate > new Date()) {
      throw new Error("Date of birth cannot be in the future");
    }

    const age = this.calculateAge(parsedDate);
    if (age < 18) {
      throw new Error("User must be at least 18 years old");
    }

    this.date = parsedDate;
  }

  private calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  public getValue(): Date {
    return this.date;
  }

  public toString(): string {
    return this.date.toISOString().split('T')[0];
  }

  public equals(other: BornDate): boolean {
    return this.date.getTime() === other.date.getTime();
  }
}
