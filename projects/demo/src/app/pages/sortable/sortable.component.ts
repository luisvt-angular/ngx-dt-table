import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.scss']
})
export class SortableComponent implements OnInit {
  players = [
    {id: 1, age: 27, club: 'Barcelona', name: 'Leonel Messi', national: 'Argentina'},
    {id: 2, age: 29, club: 'Real Madrid', name: 'Cristiano Ronaldo', national: 'Portugal'},
    {id: 3, age: 34, club: 'Liverpool', name: 'Steven Gerrard', national: 'England'},
    {id: 4, age: 22, club: 'Barcelona', name: 'Neymar', national: 'Brazil'},
    {id: 5, age: 25, club: 'Borussia Dortmund', name: 'Marco Reus', national: 'Germany'},
    {id: 6, age: 26, club: 'Real Madrid', name: 'Karim Benzema', national: 'France'},
    {id: 7, age: 30, club: 'Manchester United', name: 'Robin Van Persie', national: 'Holland'},
    {id: 8, age: 28, club: 'Manchester City', name: 'David Silva', national: 'Spain'},
    {id: 9, age: 35, club: 'Juventus', name: 'Andrea Pirlo', national: 'Italy'},
    {id: 10, age: 34, club: 'Juventus', name: 'Andrea Pirlo', national: 'Italy'},
    {id: 11, age: 34, club: 'Real Madrid', name: 'Andrea Pirlo', national: 'Italy'}
  ];

  page = {
    total: this.players.length,
    size: 5,
    index: 1
  };

  ageSorter = (row) => row.item.age;

  constructor() { }

  ngOnInit(): void {
  }

  updatePage(event: PageEvent): void {
    this.page.index = event.pageIndex + 1;
    this.page.size = event.pageSize;
  }
}
