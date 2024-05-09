import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StockExchangeService } from "./stockExchange.service";
import { StockExchangeControllerBase } from "./base/stockExchange.controller.base";

@swagger.ApiTags("stockExchanges")
@common.Controller("stockExchanges")
export class StockExchangeController extends StockExchangeControllerBase {
  constructor(
    protected readonly service: StockExchangeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
