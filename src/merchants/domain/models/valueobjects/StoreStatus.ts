
export class StoreStatus {
  private constructor(private readonly value: 'OPEN' | 'CLOSED') {}

  static open(): StoreStatus {
    return new StoreStatus('OPEN');
  }

  static closed(): StoreStatus {
    return new StoreStatus('CLOSED');
  }

  isOpen(): boolean {
    return this.value === 'OPEN';
  }

  getValue(): string {
    return this.value;
  }
}
