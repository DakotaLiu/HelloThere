<template>
  <div id="header">
    <v-navigation-drawer v-model="drawer" app class="red darken-4">
      <v-list class="mt-4">
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route" class="mt-4 drawer-effect">
            <v-list-item-action>
                <v-icon color="white">{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn icon color="white"
        href="https://www.facebook.com/haounison/"
        target="_blank"
        class="mt-3 ml-3"
        >
        <v-icon>$vuetify.icons.FBIcon</v-icon>
      </v-btn><br>
      <v-btn icon color="white"
        href="https://www.instagram.com/designyourlove.service/"
        target="_blank"
        class="mt-3 ml-3"
        >
        <v-icon>$vuetify.icons.IGIcon</v-icon>
      </v-btn>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      color="white"
      dark
      hide-on-scroll
      id="v-app-bar"
    >
      <v-app-bar-nav-icon color="#B71C1C" @click.stop="drawer=!drawer" class="hidden-lg-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title @click="$router.push('/home')" style="cursor:pointer"><v-img src="../assets/mini-logo.png" style="height:30.5px; width:144.75px;"></v-img></v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-md-and-down">
        <v-btn text color="#B71C1C" class="mx-1" to="/network">
          <span>Network</span>
        </v-btn>
        <v-btn text color="#B71C1C" class="mx-1" to="/events">
          <span>Events</span>
        </v-btn>
        <v-btn text color="#B71C1C" class="mx-1" to="/yourstory">
          <span>Your Story</span>
        </v-btn>
        <v-btn text color="#B71C1C" class="mx-1" to="/designyourlove">
          <span>Design Your Love</span>
        </v-btn>
        <v-btn text color="#B71C1C" class="mx-1" to="/careercounseling">
          <span>Career Counseling</span>
        </v-btn>
        <v-btn text color="#B71C1C" class="mx-1" to="/shop">
          <span>Shop</span>
        </v-btn>
        <v-btn text color="#B71C1C" class="mx-1" to="/aboutus">
          <span>About Us</span>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon color="#B71C1C" class="mx-0" to="/cart">
        <v-icon>mdi-shopping</v-icon>
      </v-btn>
      <!-- 會員登入 -->
      <v-btn icon color="#B71C1C" class="mx-0" v-if="user.length === 0" to="/login">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <!-- 會員設定 -->
      <v-btn icon color="#B71C1C" class="mx-0" v-if="user.length > 3" to="/member">
        <v-icon>settings</v-icon>
      </v-btn>
      <!-- 會員登出 -->
      <v-btn icon color="#B71C1C" class="mx-0" v-if="user.length > 3" @click="logout">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
      <!-- 後台管理 -->
      <v-btn icon color="#B71C1C" class="mx-0" v-if="account==='1234'" to="/back">
        <v-icon>storage</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  data () {
    return {
      drawer: false,
      links: [
        { text: 'Network', icon: 'chat', route: '/network' },
        { text: 'Events', icon: 'today', route: '/events' },
        { text: 'Your Story', icon: 'article', route: '/yourstory' },
        { text: 'Design Your Love', icon: 'psychology', route: '/designyourlove' },
        { text: 'Career Counseling ', icon: 'design_services', route: '/careercounseling' },
        { text: 'Shop', icon: 'local_mall', route: '/shop' },
        { text: 'About Us', icon: 'tour', route: '/aboutus' }
      ]
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    account () {
      return this.$store.getters.account
    },
    error: {
      get () {
        return this.$store.getters.error
      },
      set (value) {
        this.$store.commit('error', value)
      }
    }
  },
  methods: {
    logout () {
      this.axios.delete(process.env.VUE_APP_APIURL + '/logout')
        .then(response => {
          const data = response.data
          if (data.success) {
            // 呼叫 vuex 的登入
            this.$store.commit('logout')
            // 如果現在不是在首頁，跳到登出後的首頁
            if (this.$route.path !== '/home') {
              this.$router.push('/home')
            }
          } else {
            // 不是就顯示回來的 message
            alert(data.message)
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
        })
      this.$store.commit('logout')
      this.$router.push('/home')
    }
    // heartbeat () {
    //   this.axios.get(process.env.VUE_APP_APIURL + '/heartbeat')
    //     .then(response => {
    //       const data = response.data
    //       // 如果是登入中
    //       if (this.user.length > 0) {
    //         // 如果後端登入時間過期
    //         if (!data) {
    //           this.error.show = true
    //           this.error.message = 'Login time has and please login again'
    //           // 前端登出
    //           this.$store.commit('logout')
    //           // 如果現在不是在首頁，跳到登出後的首頁
    //           if (this.$route.path !== '/home') {
    //             this.$router.push('/home')
    //           }
    //         }
    //       }
    //     })
    //     .catch(() => {
    //       this.$store.commit('logout')
    //       // 如果現在不是在首頁，跳到登出後的首頁
    //       if (this.$route.path !== '/home') {
    //         this.$router.push('/home')
    //       }
    //     })
    // }
  },
  mounted () {
    window.onresize = () => {
      if (window.innerWidth > 1264) {
        this.drawer = false
      }
    }
    // this.heartbeat()
    // setInterval(() => {
    //   this.heartbeat()
    // }, 1000 * 5)
  }
}

</script>

<style lang="stylus">
#header
  // transition top .4s ease-in-out
  .hideUp
    top -48px
  .drawer-effect
    transform matrix(1,0,0,1,0,0)
    transition transform 1.5s cubic-bezier(0.19,1,0.22,1) 0.8s,background-position 0.3s ease-in-out 0s, color 0.3s ease-in-out 0s
    outline rgb(255,255,255) none 0px
    box-sizing border-box
</style>
