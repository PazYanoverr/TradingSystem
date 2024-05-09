import { StockExchange as TStockExchange } from "../api/stockExchange/StockExchange";

export const STOCKEXCHANGE_TITLE_FIELD = "name";

export const StockExchangeTitle = (record: TStockExchange): string => {
  return record.name?.toString() || String(record.id);
};
