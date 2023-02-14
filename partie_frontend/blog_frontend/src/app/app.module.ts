import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { ListBlogComponent } from './components/list-blog/list-blog.component';
import { DetailsBlogComponent } from './components/details-blog/details-blog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddBlogComponent,
    ListBlogComponent,
    DetailsBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
