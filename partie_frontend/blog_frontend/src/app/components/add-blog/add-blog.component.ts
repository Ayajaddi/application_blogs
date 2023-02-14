import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Blog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  blog: Blog = new Blog();
  submitted = false;

  constructor(private blogService: BlogService,private router: Router) { }
  ngOnInit(): void {
   
  }

  newBlog(): void {
    this.submitted = false;
    this.blog = new Blog();
  }

  save() {
    this.blogService.addBlog(this.blog)
      .subscribe(data => console.log(data), error => console.log(error));
    this.blog = new Blog();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/list']);
  }

}
