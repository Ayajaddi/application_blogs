import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Blog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
  blogs: Observable<Blog[]> | undefined;

  constructor(private blogService: BlogService,private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.blogs = this.blogService.getBlogs();
  }


 Details(id: string){
    this.router.navigate(['details', id]);
  }
}


