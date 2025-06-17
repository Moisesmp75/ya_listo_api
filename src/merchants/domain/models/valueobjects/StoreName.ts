
export class StoreName {
  private constructor(private readonly value: string) {
    if (!value || value.length > 100) {
      throw new Error('Invalid store name');
    }
  }

  static create(value: string): StoreName {
    return new StoreName(value);
  }

  getValue(): string {
    return this.value;
  }
}
