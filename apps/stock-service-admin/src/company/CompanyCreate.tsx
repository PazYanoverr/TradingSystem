import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { StockTitle } from "../stock/StockTitle";

export const CompanyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Domain" source="domain" />
        <TextInput label="Headquarters" source="headquarters" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="stocks"
          reference="Stock"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StockTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
