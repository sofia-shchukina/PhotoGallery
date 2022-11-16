package cosee.project.photo_gallery.gallery;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@SpringBootTest
@AutoConfigureMockMvc
class IntegrationTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;



    @Test
        void getAllPhotos() throws Exception {
        mockMvc.perform(post("/photo").contentType(APPLICATION_JSON).content("""
                        {"sequre_url":"abc",
                        "tags": ["tag"]}
                         """))
                .andExpect(status().is(201));
        mockMvc.perform(post("/photo").contentType(APPLICATION_JSON).content("""
                        {"sequre_url":"abcd",
                        "tags": ["tag"]}
                         """))
                .andExpect(status().is(201));
        mockMvc.perform(MockMvcRequestBuilders.get("/photo")).andExpect(status().isOk());
    }

    @Test
      void addPhoto() throws Exception {
        mockMvc.perform(post("/photo").contentType(APPLICATION_JSON).content("""
                        {"sequre_url":"abc",
                        "tags": ["tag"]}
                         """))
                .andExpect(status().is(201));
    }
}