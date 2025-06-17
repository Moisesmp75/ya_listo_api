import { Merchant } from "../models/aggregates/Merchant";
import { MerchantId } from "../models/valueobjects/MerchantId";

export interface MerchantRepository {
  getAll(): Promise<Merchant[]>;
  findById(id: MerchantId): Promise<Merchant>;
  save(merchant: Merchant): Promise<Merchant>;
  update(id: MerchantId, merchant: Merchant): Promise<Merchant>;
  delete(merchant: Merchant): Promise<Merchant>;
}
