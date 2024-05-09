import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { StockExchangeTitle } from "../stockExchange/StockExchangeTitle";

export const StockCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <NumberInput label="SharePrice" source="sharePrice" />
        <ReferenceInput
          source="stockExchange.id"
          reference="StockExchange"
          label="StockExchange"
        >
          <SelectInput optionText={StockExchangeTitle} />
        </ReferenceInput>
        <TextInput label="TicketSymbol" source="ticketSymbol" />
        <NumberInput step={1} label="TotalShares" source="totalShares" />
      </SimpleForm>
    </Create>
  );
};
