import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StockExchangeWhereUniqueInput } from "../stockExchange/StockExchangeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StockWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
  sharePrice?: FloatNullableFilter;
  stockExchange?: StockExchangeWhereUniqueInput;
  ticketSymbol?: StringNullableFilter;
  totalShares?: IntNullableFilter;
};
