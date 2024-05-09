import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StockExchangeResolverBase } from "./base/stockExchange.resolver.base";
import { StockExchange } from "./base/StockExchange";
import { StockExchangeService } from "./stockExchange.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StockExchange)
export class StockExchangeResolver extends StockExchangeResolverBase {
  constructor(
    protected readonly service: StockExchangeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
