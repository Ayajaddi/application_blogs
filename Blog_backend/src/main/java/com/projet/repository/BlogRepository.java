package com.projet.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.projet.model.Blog;

@Repository
public interface BlogRepository extends MongoRepository<Blog, String>  {
	List<Blog> findByTitleContaining(String title);

	Optional<Blog> findByTitle(String title);

}