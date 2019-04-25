export class MessageModel {
	id: number;
	fromuser: string;
	touser: string;
	message: string;
	constructor(id: number, fromuser: string, touser: string, message: string)
	{
		this.id = id;
		this.fromuser = fromuser;
		this.touser = touser;
		this.message = message;
	}
} 