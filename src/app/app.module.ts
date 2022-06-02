import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookDeleteComponent } from './book/book-delete/book-delete.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCreateComponent,
    BookEditComponent,
    BookDeleteComponent,
    BookDetailComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
