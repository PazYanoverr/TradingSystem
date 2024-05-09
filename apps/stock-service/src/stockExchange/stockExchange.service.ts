import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StockExchangeServiceBase } from "./base/stockExchange.service.base";

@Injectable()
export class StockExchangeService extends StockExchangeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
