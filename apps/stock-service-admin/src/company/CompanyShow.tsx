import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "./CompanyTitle";
import { STOCKEXCHANGE_TITLE_FIELD } from "../stockExchange/StockExchangeTitle";

export const CompanyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Domain" source="domain" />
        <TextField label="Headquarters" source="headquarters" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Stock" target="companyId" label="Stocks">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Company"
              source="company.id"
              reference="Company"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
