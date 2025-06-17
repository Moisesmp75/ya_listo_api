
export class MerchantId {
  private constructor(private readonly value: string) {
    if (!value) throw new Error('MerchantId cannot be empty');
  }

  static create(value: string): MerchantId {
    return new MerchantId(value);
  }

  getValue(): string {
    return this.value;
  }

  equals(other: MerchantId): boolean {
    return this.value === other.value;
  }
}
