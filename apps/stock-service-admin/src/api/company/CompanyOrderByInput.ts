import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  createdAt?: SortOrder;
  domain?: SortOrder;
  headquarters?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
