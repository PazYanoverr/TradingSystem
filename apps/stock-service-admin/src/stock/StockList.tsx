import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { STOCKEXCHANGE_TITLE_FIELD } from "../stockExchange/StockExchangeTitle";

export const StockList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Stocks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
