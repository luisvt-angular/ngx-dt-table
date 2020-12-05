import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';
import { DtSortEvent } from 'ngx-dt-table';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  user: User;
}

@Component({
  selector: 'app-sortable-remote',
  templateUrl: './sortable-remote.component.html',
  styleUrls: ['./sortable-remote.component.scss']
})
export class SortableRemoteComponent implements OnInit {
  posts$: Observable<Post[]>;

  page = {
    total: 0,
    size: 10,
    number: 1
  };
  loading = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(event?: PageEvent | DtSortEvent): void {
    const sort: any = {};
    if (event) {
      if ((event as PageEvent).pageSize) {
        this.page.size = (event as PageEvent).pageSize;
        this.page.number = (event as PageEvent).pageIndex + 1;
      } else if ((event as DtSortEvent).sortBy) {
        sort._sort = (event as DtSortEvent).sortBy;
        sort._order = (event as DtSortEvent).sortDirection;
      }
    }
    this.loading = true;
    this.posts$ = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
      observe: 'response',
      params: {
        _expand: 'user',
        _page: this.page.number.toString(),
        _limit: this.page.size.toString(),
        ...sort
      }
    }).pipe(map(resp => {
      this.loading = false;
      this.page.total = Number(resp.headers.get('x-total-count'));
      return resp.body;
    }));
  }
}
