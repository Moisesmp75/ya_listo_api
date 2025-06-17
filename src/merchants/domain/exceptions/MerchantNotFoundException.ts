
export class MerchantNotFoundException extends Error {
  constructor(merchantId: string) {
    super(`Merchant with ID ${merchantId} not found`);
  }
}