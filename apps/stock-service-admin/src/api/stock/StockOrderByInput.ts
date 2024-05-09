import { SortOrder } from "../../util/SortOrder";

export type StockOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sharePrice?: SortOrder;
  stockExchangeId?: SortOrder;
  ticketSymbol?: SortOrder;
  totalShares?: SortOrder;
  updatedAt?: SortOrder;
};
