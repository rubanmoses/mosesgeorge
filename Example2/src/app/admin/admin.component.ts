import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../UserDetails';
import { AssignService } from '../assign.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

userArray: UserDetails[] = [];
DisplayList: boolean = false;
userAddingActivation: boolean = false;
showSuccessSymbol: boolean = false;
constructor(private assignMentService: AssignService) { }

  ngOnInit() {
  	// this.getAllTheUsers();
  }

  getAllTheUsers(): void {
  	this.DisplayList = true;
  	this.userAddingActivation = false;
  	this.assignMentService.getAllUsers().subscribe(user => this.userArray = user);
  }
  addUserActivate(): void{
  	this.userAddingActivation = true;
  	this.DisplayList = false;
  }
  addUserToDB(id: number, userName: string,password: string,groupid: string): void {
  	userName = userName.trim();
  	password = password.trim();
  	groupid = groupid.trim();
  	if (!userName && !groupid) { return; }
  	this.assignMentService.addUser({id, userName, password, groupid} as UserDetails)
    .subscribe(task => {this.userArray.push(task);});
    this.showSuccessSymbol = true;
  }
  delete(user: UserDetails): void {
      this.userArray = this.userArray.filter(t => t !== user);
      this.assignMentService.deleteThisUser(user).subscribe();
    }
}