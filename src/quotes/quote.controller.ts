import {Controller, Get, Post, Body, Patch, Param} from '@nestjs/common';
import {QuoteService} from './quote.service';
import { Quote } from './quotesModel';

@Controller('/')
export class QuotesController{
	constructor(private quoteService:QuoteService){}
	@Get()
	async findAll(): Promise<Quote[]> {
		return this.quoteService.getAll();
	}

	@Post()
	add (@Body('author') author:string, @Body('quote')quote:string):void{
		this.quoteService.create(author, quote);

		// console.log(quote);
	}

	@Get('/:id')
	findOne(@Param('id') id:string):Quote{
		return this.quoteService.findOne(id);
	}

	@Patch('/:id')
	update(@Param('id') id:string, @Body('author') author:string, @Body('quote')quote:string):void{
		this.quoteService.update(id, author, quote);
	}






}