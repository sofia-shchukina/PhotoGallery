package cosee.project.photo_gallery.gallery;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class PhotoServiceTest {
    PhotoRepo photoRepo = mock(PhotoRepo.class);
PhotoService photoService = new PhotoService(photoRepo);
    @Test
    void addPhoto() {
        List <String> testTags = List.of("tag1", "tag2");
        Photo testPhoto = new Photo("testUrl", testTags);

        when(photoRepo.save(testPhoto)).thenReturn(testPhoto);
        Photo actualResult = photoService.addPhoto(testPhoto);
        Assertions.assertEquals(testPhoto, actualResult);
    }

    @Test
    void getAllPhotos() {
        List <String> testTags1 = List.of("tag1", "tag2");
        Photo photo1 = new Photo("url1", testTags1);
        List <String> testTags2 = List.of("tag11", "tag12");
        Photo photo2 = new Photo("url2", testTags1);
        List<Photo> testList = List.of(photo1, photo2);

        when(photoRepo.findAll()).thenReturn(testList);

        List <Photo> actualResult = photoService.getAllPhotos();
        Assertions.assertEquals(testList, actualResult);
    }
}


