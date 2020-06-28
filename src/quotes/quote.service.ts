import {Injectable, NotFoundException} from '@nestjs/common';
import {Quote} from './quotesModel';

@Injectable()
export class QuoteService{
	private readonly quotesList:Quote[] = [];

	getAll():Quote[]{
		return [...this.quotesList];
	}

	create(author:string, quote:string):void{
		this.quotesList.push(new Quote(author,quote));
	}

	update(id:string, author:string, quote:string):void{
		const index = this.quotesList.findIndex(q =>q.id === id);
		const foundQuote = this.quotesList[index];
		if(!foundQuote){
			throw new NotFoundException();
		} else{
			author !=null ? foundQuote.author = author : null;
			quote !=null ? foundQuote.quote = quote : null;
		}
	}

	findOne(id:string):Quote{
		const foundQuote = this.quotesList.find(q => q.id === id);
		return {...foundQuote};
		
	}
}
