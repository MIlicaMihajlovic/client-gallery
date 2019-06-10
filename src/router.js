import Vue from 'vue'
import Router from 'vue-router'

import AllImages from './components/AllImages.vue'
import AddImage from './components/AddImage.vue'
import MyGalleries from './components/MyGalleries.vue'

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {path: '/',
        component: AllImages,
        name: 'all-images',
        },
        {path: '/add',
        component: AddImage,
        name: 'add'
        },
        {path: '/my-galleries',
        component: MyGalleries,
        name: 'my-galleries'
        }
    ]
})