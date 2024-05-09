import { StockCreateNestedManyWithoutCompaniesInput } from "./StockCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  domain?: string | null;
  headquarters?: string | null;
  name?: string | null;
  stocks?: StockCreateNestedManyWithoutCompaniesInput;
};
