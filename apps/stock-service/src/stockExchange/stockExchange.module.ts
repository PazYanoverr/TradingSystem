import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StockExchangeModuleBase } from "./base/stockExchange.module.base";
import { StockExchangeService } from "./stockExchange.service";
import { StockExchangeController } from "./stockExchange.controller";
import { StockExchangeResolver } from "./stockExchange.resolver";

@Module({
  imports: [StockExchangeModuleBase, forwardRef(() => AuthModule)],
  controllers: [StockExchangeController],
  providers: [StockExchangeService, StockExchangeResolver],
  exports: [StockExchangeService],
})
export class StockExchangeModule {}
