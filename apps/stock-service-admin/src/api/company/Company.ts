import { Stock } from "../stock/Stock";

export type Company = {
  createdAt: Date;
  domain: string | null;
  headquarters: string | null;
  id: string;
  name: string | null;
  stocks?: Array<Stock>;
  updatedAt: Date;
};
