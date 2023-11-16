import { Component, Input } from '@angular/core'; 
 
@Component({ 
  selector: 'app-coffee-list', 
  templateUrl: './coffee-list.component.html', 
  styleUrls: ['./coffee-list.component.css'] 
}) 
export class CoffeeListComponent { 
  @Input() coffee: any;
}

