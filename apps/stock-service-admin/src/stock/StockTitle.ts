import { Stock as TStock } from "../api/stock/Stock";

export const STOCK_TITLE_FIELD = "ticketSymbol";

export const StockTitle = (record: TStock): string => {
  return record.ticketSymbol?.toString() || String(record.id);
};
