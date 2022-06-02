import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: Book = {};

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router,) {
    this.activatedRoute.paramMap.subscribe((paraMap) => {
      const id = paraMap.get('id');
      this.deleteById(id);
    });
  }

  ngOnInit() {
  }

  deleteById(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.bookService.delete(id).subscribe(() => {
          this.router.navigate(['']);
        });
        Swal.fire(
          'Deleted!',
          'Your book has been deleted.',
          'success'
        )
      }
    })
  }
}
