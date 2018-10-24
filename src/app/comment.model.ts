export class Comment{
	public username: string;
	public message: string;
	public date: any;

	constructor(name: string, message:string, date:any){
		this.username = name;
		this.message = message;
		this.date = date;

	}

}