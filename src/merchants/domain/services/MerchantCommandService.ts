import { Merchant } from "../models/aggregates/Merchant";
import { AddMerchantCommand } from "../models/commands/AddMerchantCommand";
import { DeleteMerchantCommand } from "../models/commands/DeleteMerchantCommand";
import { UpdateMerchantCommand } from "../models/commands/UpdateMerchantCommand";

export interface MerchantCommandService {
  Handle(command: AddMerchantCommand): Promise<Merchant>;
  Handle(command: UpdateMerchantCommand): Promise<Merchant>;
  Handle(command: DeleteMerchantCommand): Promise<Merchant>;
}