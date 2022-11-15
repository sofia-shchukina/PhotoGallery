package cosee.project.photo_gallery.gallery.hello;

import org.springframework.data.annotation.Id;

public record Photo(@Id String secure_url) {
}
