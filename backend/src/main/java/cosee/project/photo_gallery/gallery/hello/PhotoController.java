package cosee.project.photo_gallery.gallery.hello;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/photo")
public class PhotoController {

    private final PhotoService photoService;

    @PostMapping()
    public ResponseEntity<Photo> addPhoto(@RequestBody Photo photo){
        Photo savedPhoto = photoService.addPhoto(photo);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPhoto);
    }
}
