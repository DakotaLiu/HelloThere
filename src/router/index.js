import Vue from 'vue'
import VueRouter from 'vue-router'
import Talk from '../views/Talk.vue'
import Password from '../components/MemberCenter/Password.vue'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Talk',
    component: Talk
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: 'HelloThere'
    }
  },
  {
    path: '/network',
    name: 'NetworkGroup',
    component: () => import(/* webpackChunkName: "network" */ '../views/NetworkGroup.vue'),
    meta: {
      title: 'Network'
      // needLogin: true
    }
  },
  {
    path: '/network/:id',
    name: 'Network',
    component: () => import(/* webpackChunkName: "network" */ '../views/Network.vue'),
    meta: {
      title: 'Network'
      // needLogin: true
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue'),
    meta: {
      title: 'Events'
    }
  },
  {
    path: '/yourstory',
    name: 'YourStory',
    component: () => import(/* webpackChunkName: "yourstory" */ '../views/YourStory.vue'),
    meta: {
      title: 'Your Story'
    }
  },
  {
    path: '/yourstory/:id',
    name: 'Story',
    component: () => import(/* webpackChunkName: "yourstory" */ '../views/Story.vue'),
    meta: {
      title: 'Your Story'
      // needLogin: true
    }
  },
  {
    path: '/designyourlove',
    name: 'DesignYourLove',
    component: () => import(/* webpackChunkName: "designyourlove" */ '../views/DesignYourLove.vue'),
    meta: {
      title: 'Design Your Love'
    }
  },
  {
    path: '/careercounseling',
    name: 'CareerCounseling',
    component: () => import(/* webpackChunkName: "careercounseling" */ '../views/CareerCounseling.vue'),
    meta: {
      title: 'Career Counseling'
      // needLogin: true
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue'),
    meta: {
      title: 'Shop'
    }
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "aboutus" */ '../views/AboutUs.vue'),
    meta: {
      title: 'About Us'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      title: 'Cart'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/apply',
    name: 'Apply',
    component: () => import(/* webpackChunkName: "apply" */ '../views/Apply.vue'),
    meta: {
      title: 'Apply Membership'
    }
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import(/* webpackChunkName: "member" */ '../views/Member.vue'),
    meta: {
      title: 'Member'
      // needLogin: true
    },
    children: [
      {
        path: 'password',
        component: Password,
        meta: {
          login: false,
          title: 'Reset Password',
          route: 'Member'
        }
      }
    ]
  },
  {
    path: '/back',
    name: 'Back',
    component: () => import(/* webpackChunkName: "back" */ '../views/Back.vue'),
    meta: {
      title: 'Backend Management'
    }
  }
]

const router = new VueRouter({
  routes
})
// 進入頁面後, 設定網頁標題
// to 是進去的那頁
// from 是從哪頁過來
router.afterEach((to, from) => {
  document.title = to.meta.title
})

// to 為即將訪問的頁面
// from 為來源頁面
// next 為採取的導向動作
router.beforeEach((to, from, next) => {
  // 若即將訪問的頁面需登入且 vuex 狀態並沒有登入
  if (to.meta.needLogin && !store.state.user.login) {
    alert('please login')
    next('/login')
  } else next()
})
export default router
