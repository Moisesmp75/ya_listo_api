import { Merchant } from "../models/aggregates/Merchant";
import { GetAllMerchantsQuery } from "../models/queries/GetAllMerchantsQuery";
import { GetMerchantByIdQuery } from "../models/queries/GetMerchantByIdQuery";

export interface MerchantQueryService {
  Handle(query: GetAllMerchantsQuery): Promise<Merchant[]>;
  Handle(query: GetMerchantByIdQuery): Promise<Merchant>;
}