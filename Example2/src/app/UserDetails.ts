export class UserDetails {
	id: number;
	userName: string;
	password: string;
	groupid: string;
	constructor(id: number, userName: string,password: string,groupid: string)
	{
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.groupid = groupid;
	}
} 

