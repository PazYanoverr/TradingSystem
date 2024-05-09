import { StockUpdateManyWithoutStockExchangesInput } from "./StockUpdateManyWithoutStockExchangesInput";

export type StockExchangeUpdateInput = {
  address?: string | null;
  name?: string | null;
  stocks?: StockUpdateManyWithoutStockExchangesInput;
};
