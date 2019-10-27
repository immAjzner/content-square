import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  findUsers(userName: string): void {
    this.http.get(`http://localhost:3000/users/full/${userName}`, { observe: 'response' }).subscribe(users => {
      this.subject.next(users.body);
    });
  }

  getNames(userName: string): Observable<any> {
    return this.http.get(`http://localhost:3000/users/name/${userName}`, { observe: 'response' });
  }

  clearMessages(): void {
    this.subject.next();
  }

  getUsers(): Observable<any> {
    return this.subject.asObservable();
  }
}
