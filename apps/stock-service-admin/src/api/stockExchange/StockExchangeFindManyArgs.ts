import { StockExchangeWhereInput } from "./StockExchangeWhereInput";
import { StockExchangeOrderByInput } from "./StockExchangeOrderByInput";

export type StockExchangeFindManyArgs = {
  where?: StockExchangeWhereInput;
  orderBy?: Array<StockExchangeOrderByInput>;
  skip?: number;
  take?: number;
};
