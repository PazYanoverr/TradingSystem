import { Stock } from "../stock/Stock";

export type StockExchange = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  stocks?: Array<Stock>;
  updatedAt: Date;
};
