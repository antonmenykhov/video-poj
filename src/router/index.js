import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/videonabludenie',
    name: 'Service',
    props: {
      name: 'Видеонаблюдение',
      smallDescription: 'Vestibulum commodo at dolor eu aliquam. In congue ornare augue eu scelerisque. Duis vestibulum, dolor sed facilisis laoreet.',
      description: 'Vestibulum commodo at dolor eu aliquam. In congue ornare augue eu scelerisque. Duis vestibulum, dolor sed facilisis laoreet. Vestibulum commodo at dolor eu aliquam. In congue ornare augue eu scelerisque. Duis vestibulum, dolor sed facilisis laoreet. Vestibulum commodo at dolor eu aliquam. In congue ornare augue eu scelerisque. Duis vestibulum, dolor sed facilisis laoreet. Vestibulum commodo at dolor eu aliquam. In congue ornare augue eu scelerisque. Duis vestibulum, dolor sed facilisis laoreet. Vestibulum commodo at dolor eu aliquam. In congue ornare augue eu scelerisque. Duis vestibulum, dolor sed facilisis laoreet.',
      tasks: [
        {
          name: 'Охрана территории',
          description: "Охрана территории Охрана территории Охрана территории Охрана территории"
        },
        {
          name: 'Охрана территории',
          description: "Охрана территории Охрана территории Охрана территории Охрана территории"
        },
        {
          name: 'Охрана территории',
          description: "Охрана территории Охрана территории Охрана территории Охрана территории"
        },{
          name: 'Охрана территории',
          description: "Охрана территории Охрана территории Охрана территории Охрана территории"
        },
        {
          name: 'Охрана территории',
          description: "Охрана территории Охрана территории Охрана территории Охрана территории"
        }
      ],
      sostav: [
        {
          name: 'Видеорегистратор',
          description: 'Служит для записи видео с камер, Служит для записи видео с камер,',
          image: '/img/video1.jpg'
        },
        {
          name: 'Видеорегистратор',
          description: 'Служит для записи видео с камер, Служит для записи видео с камер,',
          image: '/img/video1.jpg'
        },
        {
          name: 'Видеорегистратор',
          description: 'Служит для записи видео с камер, Служит для записи видео с камер,',
          image: '/img/video1.jpg'
        },
        {
          name: 'Видеорегистратор',
          description: 'Служит для записи видео с камер, Служит для записи видео с камер,',
          image: '/img/video1.jpg'
        },
      ],
      mainImage: '/img/sot3.jpg',
      images: ['/img/video1.jpg', '/img/skud3.jpg'],
      brands: [
        {
          name: 'Hiwatch',
          image: '/img/logos/hiwatch.png'
        },
        
        {
          name: 'trassir',
          image: '/img/logos/trassir.png'
        },
        {
          name: 'Dahua',
          image: '/img/logos/dahua.png'
        },
        {
          name: 'Hikvision',
          image: '/img/logos/hikvision.png'
        }
      ],


    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Service.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
