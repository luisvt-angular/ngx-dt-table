import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-basic-remote',
  templateUrl: './basic-remote.component.html',
  styleUrls: ['./basic-remote.component.scss']
})
export class BasicRemoteComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

}
