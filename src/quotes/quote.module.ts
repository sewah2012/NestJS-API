import {Module} from '@nestjs/common';
import {QuoteService} from './quote.service';
import {QuotesController} from './quote.controller';

@Module({
	controllers: [QuotesController],
	providers: [QuoteService],

})

export class QuoteModule{}