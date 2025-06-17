
export class StoreId {
  private constructor(private readonly value: string) {
    if (!value) throw new Error('StoreId cannot be empty');
  }

  static create(value: string): StoreId {
    return new StoreId(value);
  }

  getValue(): string {
    return this.value;
  }

  equals(other: StoreId): boolean {
    return this.value === other.value;
  }
}
