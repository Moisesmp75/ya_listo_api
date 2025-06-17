
export class Address {
  private constructor(private readonly value: string) {
    if (!value || value.length > 250) {
      throw new Error('Invalid address');
    }
  }

  static create(value: string): Address {
    return new Address(value);
  }

  getValue(): string {
    return this.value;
  }
}
