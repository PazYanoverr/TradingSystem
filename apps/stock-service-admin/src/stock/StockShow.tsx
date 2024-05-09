import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { STOCKEXCHANGE_TITLE_FIELD } from "../stockExchange/StockExchangeTitle";

export const StockShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Company" source="company.id" reference="Company">
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="SharePrice" source="sharePrice" />
        <ReferenceField
          label="StockExchange"
          source="stockexchange.id"
          reference="StockExchange"
        >
          <TextField source={STOCKEXCHANGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TicketSymbol" source="ticketSymbol" />
        <TextField label="TotalShares" source="totalShares" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
