package cosee.project.photo_gallery.gallery;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PhotoService {
    private final PhotoRepo photoRepo;

    public Photo addPhoto(Photo photo) {
        return photoRepo.save(photo);
    }

    public List<Photo> getAllPhotos() {
        return photoRepo.findAll();
    }
}
