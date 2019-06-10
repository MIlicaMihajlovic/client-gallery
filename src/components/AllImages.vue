<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: '/url(' + image + ')', width: '300px', height: '200px' }"
    >
    {{images.title}}
    {{images.description}}
    </div>
  </div>
</template>
 
<script>
  import VueGallery from 'vue-gallery'

  import imagesService from './../service/images-service.js'
  
  export default {
    data: function () {
      return {
        //array of objects
        images: [],
        index: null
      };
    },
    created() {
       imagesService.getImages()
       .then(response => {
           console.log(response)
           this.images = response.data
       })
    }, 
    components: {
      'gallery': VueGallery
    },
  }
</script> 
 
<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style> 
 