import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-details-blog',
  templateUrl: './details-blog.component.html',
  styleUrls: ['./details-blog.component.css']
})
export class DetailsBlogComponent implements OnInit {
  id!: string;
  blog!: Blog;
  constructor(private blogService: BlogService,private router: Router,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.blog = new Blog();

    this.id = this.route.snapshot.params['id'];
    
    this.blogService.detailsBlog(this.id)
      .subscribe(data => {
        console.log(data)
        this.blog = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/list']);
  }
}
