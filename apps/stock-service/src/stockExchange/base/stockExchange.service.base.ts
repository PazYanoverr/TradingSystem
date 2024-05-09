/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  StockExchange as PrismaStockExchange,
  Stock as PrismaStock,
} from "@prisma/client";

export class StockExchangeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.StockExchangeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.stockExchange.count(args);
  }

  async stockExchanges<T extends Prisma.StockExchangeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StockExchangeFindManyArgs>
  ): Promise<PrismaStockExchange[]> {
    return this.prisma.stockExchange.findMany<Prisma.StockExchangeFindManyArgs>(
      args
    );
  }
  async stockExchange<T extends Prisma.StockExchangeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StockExchangeFindUniqueArgs>
  ): Promise<PrismaStockExchange | null> {
    return this.prisma.stockExchange.findUnique(args);
  }
  async createStockExchange<T extends Prisma.StockExchangeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StockExchangeCreateArgs>
  ): Promise<PrismaStockExchange> {
    return this.prisma.stockExchange.create<T>(args);
  }
  async updateStockExchange<T extends Prisma.StockExchangeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StockExchangeUpdateArgs>
  ): Promise<PrismaStockExchange> {
    return this.prisma.stockExchange.update<T>(args);
  }
  async deleteStockExchange<T extends Prisma.StockExchangeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StockExchangeDeleteArgs>
  ): Promise<PrismaStockExchange> {
    return this.prisma.stockExchange.delete(args);
  }

  async findStocks(
    parentId: string,
    args: Prisma.StockFindManyArgs
  ): Promise<PrismaStock[]> {
    return this.prisma.stockExchange
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .stocks(args);
  }
}