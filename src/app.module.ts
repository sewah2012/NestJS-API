import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { QuoteModule } from './quotes/quote.module';

@Module({
  imports: [QuoteModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
