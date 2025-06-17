
import { StoreId } from "../valueobjects/StoreId";
import { StoreName } from "../valueobjects/StoreName";
import { StoreHours } from "../valueobjects/StoreHours";
import { StoreStatus } from "../valueobjects/StoreStatus";
import { Address } from "../valueobjects/Address";


export class Store {

  private id: StoreId;
  private name: StoreName;
  private address: Address;
  private hours: StoreHours;
  private status: StoreStatus;

  constructor(
    id: string,
    name: string,
    address: string,
    openingTime: string,
    closingTime: string,
    isOpen: boolean
  ) {
    this.id = StoreId.create(id);
    this.name = StoreName.create(name);
    this.address = Address.create(address);
    this.hours = new StoreHours(openingTime, closingTime);
    this.status = isOpen ? StoreStatus.open() : StoreStatus.closed();
  }

  getId(): StoreId {
    return this.id;
  }

  open(): void {
    this.status = StoreStatus.open();
  }

  close(): void {
    this.status = StoreStatus.closed();
  }

  isOpen(): boolean {
    return this.status.isOpen();
  }
}
