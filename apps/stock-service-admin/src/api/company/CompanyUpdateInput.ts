import { StockUpdateManyWithoutCompaniesInput } from "./StockUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  domain?: string | null;
  headquarters?: string | null;
  name?: string | null;
  stocks?: StockUpdateManyWithoutCompaniesInput;
};
