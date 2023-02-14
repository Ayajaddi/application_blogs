import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { DetailsBlogComponent } from './components/details-blog/details-blog.component';
import { ListBlogComponent } from './components/list-blog/list-blog.component';

const routes: Routes = [
 
  { path: 'list', component: ListBlogComponent },
  { path: 'add', component: AddBlogComponent },
  { path: 'details/:id', component: DetailsBlogComponent },
];


  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
