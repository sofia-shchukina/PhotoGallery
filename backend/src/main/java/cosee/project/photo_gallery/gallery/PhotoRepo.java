package cosee.project.photo_gallery.gallery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoRepo extends MongoRepository<Photo, String> {
}
