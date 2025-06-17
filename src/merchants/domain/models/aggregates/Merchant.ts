import { Store } from "../entities/Store";
import { MerchantId } from "../valueobjects/MerchantId";
import { StoreId } from "../valueobjects/StoreId";

export class Merchant {
  private stores: Store[] = [];

  constructor(public readonly id: MerchantId) {}

  addStore(store: Store): void {
    const exists = this.stores.find((s) => s.getId().equals(store.getId()));
    if (exists) throw new Error('Store already exists for this merchant');

    this.stores.push(store);
  }

  removeStore(storeId: string): void {
    this.stores = this.stores.filter((s) => !s.getId().equals(StoreId.create(storeId)));
  }

  getStores(): Store[] {
    return [...this.stores];
  }
}
