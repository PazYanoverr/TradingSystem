/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { StockExchange } from "./StockExchange";
import { StockExchangeCountArgs } from "./StockExchangeCountArgs";
import { StockExchangeFindManyArgs } from "./StockExchangeFindManyArgs";
import { StockExchangeFindUniqueArgs } from "./StockExchangeFindUniqueArgs";
import { CreateStockExchangeArgs } from "./CreateStockExchangeArgs";
import { UpdateStockExchangeArgs } from "./UpdateStockExchangeArgs";
import { DeleteStockExchangeArgs } from "./DeleteStockExchangeArgs";
import { StockFindManyArgs } from "../../stock/base/StockFindManyArgs";
import { Stock } from "../../stock/base/Stock";
import { StockExchangeService } from "../stockExchange.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StockExchange)
export class StockExchangeResolverBase {
  constructor(
    protected readonly service: StockExchangeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "StockExchange",
    action: "read",
    possession: "any",
  })
  async _stockExchangesMeta(
    @graphql.Args() args: StockExchangeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [StockExchange])
  @nestAccessControl.UseRoles({
    resource: "StockExchange",
    action: "read",
    possession: "any",
  })
  async stockExchanges(
    @graphql.Args() args: StockExchangeFindManyArgs
  ): Promise<StockExchange[]> {
    return this.service.stockExchanges(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => StockExchange, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "StockExchange",
    action: "read",
    possession: "own",
  })
  async stockExchange(
    @graphql.Args() args: StockExchangeFindUniqueArgs
  ): Promise<StockExchange | null> {
    const result = await this.service.stockExchange(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => StockExchange)
  @nestAccessControl.UseRoles({
    resource: "StockExchange",
    action: "create",
    possession: "any",
  })
  async createStockExchange(
    @graphql.Args() args: CreateStockExchangeArgs
  ): Promise<StockExchange> {
    return await this.service.createStockExchange({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => StockExchange)
  @nestAccessControl.UseRoles({
    resource: "StockExchange",
    action: "update",
    possession: "any",
  })
  async updateStockExchange(
    @graphql.Args() args: UpdateStockExchangeArgs
  ): Promise<StockExchange | null> {
    try {
      return await this.service.updateStockExchange({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => StockExchange)
  @nestAccessControl.UseRoles({
    resource: "StockExchange",
    action: "delete",
    possession: "any",
  })
  async deleteStockExchange(
    @graphql.Args() args: DeleteStockExchangeArgs
  ): Promise<StockExchange | null> {
    try {
      return await this.service.deleteStockExchange(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Stock], { name: "stocks" })
  @nestAccessControl.UseRoles({
    resource: "Stock",
    action: "read",
    possession: "any",
  })
  async findStocks(
    @graphql.Parent() parent: StockExchange,
    @graphql.Args() args: StockFindManyArgs
  ): Promise<Stock[]> {
    const results = await this.service.findStocks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}