import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../UserDetails';
import { MessageModel } from '../MessageModel';
import { AssignService } from '../assign.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	userArray: UserDetails[] = [];
	sentMessages: MessageModel[] = [];
	replyMessages: MessageModel[] = [];
	displayUnAuthorized: boolean = false;
	loginDisplay: boolean = true;
	messageActivationFlag: boolean = false;
	checkForConversation: boolean = false;
	userNameFromTemp: string;
	showSuccessSymbol: boolean = false;
  constructor(private assignMentService: AssignService) { }

  ngOnInit() {
  }

  fetchInformationOfUser(name: string): void {
  	this.displayUnAuthorized = true;
  	this.showSuccessSymbol = false;
  	this.loginDisplay = false;
  	this.userNameFromTemp = name;
  	this.assignMentService.getUserGroup(name).subscribe(user => this.userArray = user);
  }
  messageActivation(): void {
  	this.messageActivationFlag = true;
  }
  chatWithUser(toUserName: string): void {
  	this.flushArray();
  	this.checkForConversation = true;
  	console.log(this.userNameFromTemp);
  	console.log(toUserName);
  	console.log("INSIDE CHAT");
  	this.showSuccessSymbol = false;
  	this.assignMentService.getAllSentMessageOfUsers(this.userNameFromTemp,toUserName).subscribe(msg => this.sentMessages = msg);
  	this.assignMentService.getAllReplyMessageOfUsers(this.userNameFromTemp,toUserName).subscribe(msg => this.replyMessages = msg);
  	console.log("Sent Array");
	  console.log(this.sentMessages)
	  console.log("Reply Array");
	  console.log(this.replyMessages)
  }
  check(nameCheck: string): void{
  	console.log(nameCheck);
  }
  sendTheMessage(id: number, msg: string, toAddress: string,from: string): void {
	  	console.log("SEND THE MESSAGE");
	  	console.log("Identiy - " +id);
	  	console.log("Message - " +msg);
	  	console.log("To Address - " +toAddress);
	  	console.log("From Address - " +from);
	  	this.showSuccessSymbol = true;
	  	msg = msg.trim();
	  	toAddress = toAddress.trim();
	  	from = this.userNameFromTemp;
	  	this.assignMentService.sentMessage(new MessageModel(id,from,toAddress,msg))
	    .subscribe(msg => {this.sentMessages.push(msg);});
	    console.log("Sent Array");
		  console.log(this.sentMessages)
	}
	flushArray() {
    while(this.sentMessages.length > 0) 
    {
        this.sentMessages.pop();
    }
     while(this.replyMessages.length > 0) 
    {
        this.replyMessages.pop();
    }
  }

}