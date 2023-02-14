package com.projet.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.projet.model.Blog;
import com.projet.repository.BlogRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class BlogController {
	 @Autowired
	  BlogRepository bogRepository;

	 @GetMapping("/blog")
	  public ResponseEntity<List<Blog>> getAllBlogs(@RequestParam(required = false) String title) {
		 try {
			    List<Blog> blogs = new ArrayList<Blog>();

			    if (title == null)
			    	bogRepository.findAll().forEach(blogs::add);
			    else
			    	bogRepository.findByTitleContaining(title).forEach(blogs::add);

			    if (blogs.isEmpty()) {
			      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			    }

			    return new ResponseEntity<>(blogs, HttpStatus.OK);
			  } catch (Exception e) {
			    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			  }
			}

	  @GetMapping("/blog/{id}")
	  public ResponseEntity<Blog> getBlogById(@PathVariable("id") String id) {
	  Optional<Blog> blogData = bogRepository.findById(id);

		  if (blogData.isPresent()) {
		    return new ResponseEntity<>(blogData.get(), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
		}
	

	  @PostMapping("/blog")
	  public ResponseEntity<Blog> addBlog(@RequestBody Blog blog) {
		  try {
			  Blog _blog = bogRepository.save(new Blog(blog.getTitle(), blog.getContent(),blog.getAuthor() ));
			    return new ResponseEntity<>(_blog, HttpStatus.CREATED);
			  } catch (Exception e) {
			    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			  }
	    
	  }
	  

	  @GetMapping("/blog/{title}")
	  public ResponseEntity<Blog> getBlogByTitle(@PathVariable("title") String title) {
	  Optional<Blog> blogData = bogRepository.findByTitle(title);

		  if (blogData.isPresent()) {
		    return new ResponseEntity<>(blogData.get(), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
		}
	
}
