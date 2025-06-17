
export class StoreHours {
  constructor(
    public readonly openingTime: string, // e.g., "08:00"
    public readonly closingTime: string  // e.g., "22:00"
  ) {
    if (!openingTime || !closingTime) {
      throw new Error('Store hours must have both opening and closing time');
    }
  }
}
