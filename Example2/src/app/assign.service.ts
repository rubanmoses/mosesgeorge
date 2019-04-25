import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee';
import { UserDetails } from './UserDetails';
import { MessageModel } from './MessageModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AssignService {

  private taskUrl = 'http://localhost:8080/ruban'; // URL to web api
  constructor(private http: HttpClient) { }

  // getInformation(): Observable<Employee[]> {
  //       const url = this.taskUrl + '/getEmployees';
  //       return this.http.get<Employee[]>(url);
  //   }
    getAllUsers(): Observable<UserDetails[]> {
        const url = this.taskUrl + '/getUsersList';
        return this.http.get<UserDetails[]>(url);
    }
    addUser(user: UserDetails): Observable<UserDetails> {
      return this.http.post<UserDetails>(this.taskUrl + '/addUser' , user, httpOptions);
    }
    getUserGroup(name: string): Observable<UserDetails[]> {
        const url = this.taskUrl + '/checkUserExist/' + `${name}`;
        return this.http.get<UserDetails[]>(url);
    }
    getAllSentMessageOfUsers(fromName: string,toName: string): Observable<MessageModel[]> {
        const url = this.taskUrl + '/sentMessage/' + `${fromName}`+ `/${toName}`;
        return this.http.get<MessageModel[]>(url);
    }
    getAllReplyMessageOfUsers(fromName: string,toName: string): Observable<MessageModel[]> {
        const url = this.taskUrl + '/replyMessage/' + `${fromName}`+ `/${toName}`;
        return this.http.get<MessageModel[]>(url);
    }
    sentMessage(message: MessageModel): Observable<MessageModel> {
      return this.http.post<MessageModel>(this.taskUrl + '/sendMessage' , message, httpOptions);
    }
    deleteThisUser(user: UserDetails): Observable<UserDetails> {
      const id = user.id;
      const url = `${this.taskUrl}/${id}`;
      return this.http.delete<UserDetails>(url,httpOptions);
    }
}