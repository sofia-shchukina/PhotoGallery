package cosee.project.photo_gallery.gallery.hello;

import org.springframework.data.annotation.Id;

import java.util.List;

public record Photo(@Id String secure_url,
List<String>tags) {
}
