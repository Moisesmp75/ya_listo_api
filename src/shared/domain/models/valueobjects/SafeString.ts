
export class SafeString {
  private value: string;

  private static dangerousCharactersPattern = /['"`;<>\$%&\|\\]/;

  constructor(value: string) {
    if (!value || value.trim().length === 0) {
      throw new Error("SafeString cannot be empty or blank");
    }

    if (SafeString.dangerousCharactersPattern.test(value)) {
      throw new Error("The string contains dangerous characters that may compromise security.");
    }

    this.value = value;
  }

  public getValue(): string {
    return this.value;
  }

  public toString(): string {
    return this.value;
  }

  public equals(other: SafeString): boolean {
    return this.value === other.value;
  }
}
