export class Quote{
	id:string = Math.floor(Math.random()*15).toString();
	constructor (public author:string, public quote:string,){};

}