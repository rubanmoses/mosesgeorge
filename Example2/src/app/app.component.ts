import { Component, OnInit  } from '@angular/core';
import { AssignService } from './assign.service';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  employeeArray: Employee[] = [];
  constructor(private assignMentService: AssignService) { }

  ngOnInit() {
      // this.getData();
  	}

  // getData(): void {
  // 	this.assignMentService.getInformation().subscribe(emp => this.employeeArray = emp);
  // }


  // fetchInformation(name: string): void {
  // 		console.log('Inside fetch Information method');
  //     this.flushArray();
  //     this.getUsers();
  //     this.switchWork();
  //     this.toDoService.getInformation(name).subscribe(myTasks => this.myTask = myTasks);
  //  }
}
