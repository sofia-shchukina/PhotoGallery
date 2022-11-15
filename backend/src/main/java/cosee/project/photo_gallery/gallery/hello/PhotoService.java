package cosee.project.photo_gallery.gallery.hello;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PhotoService {
    private final PhotoRepo photoRepo;

    public Photo addPhoto(Photo photo) {
        return photoRepo.save(photo);
    }
}
