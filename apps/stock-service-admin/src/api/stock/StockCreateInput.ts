import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StockExchangeWhereUniqueInput } from "../stockExchange/StockExchangeWhereUniqueInput";

export type StockCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  sharePrice?: number | null;
  stockExchange?: StockExchangeWhereUniqueInput | null;
  ticketSymbol?: string | null;
  totalShares?: number | null;
};
