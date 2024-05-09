import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StockListRelationFilter } from "../stock/StockListRelationFilter";

export type CompanyWhereInput = {
  domain?: StringNullableFilter;
  headquarters?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  stocks?: StockListRelationFilter;
};
