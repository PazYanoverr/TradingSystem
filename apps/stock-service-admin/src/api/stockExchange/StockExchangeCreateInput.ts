import { StockCreateNestedManyWithoutStockExchangesInput } from "./StockCreateNestedManyWithoutStockExchangesInput";

export type StockExchangeCreateInput = {
  address?: string | null;
  name?: string | null;
  stocks?: StockCreateNestedManyWithoutStockExchangesInput;
};
