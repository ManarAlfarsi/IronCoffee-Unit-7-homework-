import { Component, EventEmitter, Output } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output()
  searchTextEvent: EventEmitter<string>;

  queryName: string;
  coffees: any[];

  constructor(private coffeeService: CoffeeService) {
    this.queryName = '';
    this.coffees = [];
    this.searchTextEvent = new EventEmitter<string>();
  }

  search() {
    this.searchTextEvent.emit(this.queryName);
  }
}
