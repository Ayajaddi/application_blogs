package com.projet.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.*;

@Document(collection = "blog")
@Getter
@Setter
public class Blog {
	
	@Id
	  private String id;
	  private String title;
	  private String content;
	  private String author;
	  
	public Blog() {
		
	
	}

	public Blog(String title, String content, String author) {
	    this.title = title;
	    this.content = content;
	    this.author = author;
	  }

	@Override
	public String toString() {
		return "Blog [id=" + id + ", title=" + title + ", content=" + content + ", author=" + author + "]";
	}

}
