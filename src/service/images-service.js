import http from './http-service.js'

class ImagesService {
    getImages() {
            return http.get('/images')
             .then(({ data }) => data)
             .catch((error) => {
                console.error(error);
              });
    }
}
const imagesService = new ImagesService()
export default imagesService