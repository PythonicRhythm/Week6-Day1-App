import { Component } from '@angular/core';
import { BookService } from './demolist.service';

@Component({
  selector: 'test-root',
  template: `
  
  <!-- ngIf works as a simple if/else statement -->
  <div *ngIf="books.length > 0; else nobooks">
    <h2>{{title}}</h2>
    <ul>
      <li *ngFor="let book of books">
        {{book}}  
      </li>
    </ul>
  </div>

  <!-- <div *ngIf="books.length == 0">
    <h2>No Books Available</h2>
  </div> -->

  <!-- An ng-template is some quick html to call
   for a specific situation -->
  <ng-template #nobooks>
    <h2>No Books Available !!</h2>
  </ng-template>

  <!-- Create an ul list of books using ngFor (aka for each)
   let book of books essentially creates a var for
   every single book in books -->
  <!-- <ul>
    <li *ngFor="let book of books">
      {{book}}
    </li>
  </ul> -->
  `,
//   styleUrl: './demo.component.css'
})
export class TestComponent {
    title = "List of Books";
    books;

    constructor() {
      let srv = new BookService();
      this.books = srv.getBooks();
    }

}
