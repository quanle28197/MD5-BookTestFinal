import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = {};
  isSubmitted = false;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  createNewBook(bookForm) {
    this.isSubmitted = true;
    if (bookForm.valid) {
      this.bookService.save(this.book).subscribe(() => {
          var Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          Toast.fire({
            icon: 'success',
            title: 'success'
          })
        },
        () => {
          alert('Fail');
        });
    }
  }

}
