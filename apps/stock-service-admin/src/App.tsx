import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { StockExchangeList } from "./stockExchange/StockExchangeList";
import { StockExchangeCreate } from "./stockExchange/StockExchangeCreate";
import { StockExchangeEdit } from "./stockExchange/StockExchangeEdit";
import { StockExchangeShow } from "./stockExchange/StockExchangeShow";
import { StockList } from "./stock/StockList";
import { StockCreate } from "./stock/StockCreate";
import { StockEdit } from "./stock/StockEdit";
import { StockShow } from "./stock/StockShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Stock Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="StockExchange"
          list={StockExchangeList}
          edit={StockExchangeEdit}
          create={StockExchangeCreate}
          show={StockExchangeShow}
        />
        <Resource
          name="Stock"
          list={StockList}
          edit={StockEdit}
          create={StockCreate}
          show={StockShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
