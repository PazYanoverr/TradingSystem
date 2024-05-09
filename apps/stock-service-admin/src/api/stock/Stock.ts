import { Company } from "../company/Company";
import { StockExchange } from "../stockExchange/StockExchange";

export type Stock = {
  company?: Company | null;
  createdAt: Date;
  id: string;
  sharePrice: number | null;
  stockExchange?: StockExchange | null;
  ticketSymbol: string | null;
  totalShares: number | null;
  updatedAt: Date;
};
