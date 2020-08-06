<template>
<div id="login">
  <v-container fluid>
    <v-row justify-center>
      <v-col align-center cols="12" class="mt-16 d-flex flex-column align-center position-relative">
        <p class="text-h4 text-md-h3 text-xl-h2 text-center">Hey, welcome back!</p>
      </v-col>
      <v-col align-center cols="12" class="mt-2 d-flex flex-column align-center position-relative">
        <span class="text-center text-lg-h6 text-md-left abovebg">Apply to be a member?<span class="ml-2 text-decoration-underline red--text text--darken-4 abovebg" style="cursor: pointer;" @click="$router.push('/apply')">Apply</span></span>
        <v-col cols="12" sm="4" lg="3" class="mt-6 d-flex flex-column align-stretch">
          <form class="justify-center abovebg">
            <v-text-field
              prepend-icon="person"
              label="Account"
              label-for="input-account"
              description="Your account must be 4-20 characters"
              invalid-feedback="Your account is invalid. Please try again."
              type="text"
              v-model="account"
              :state="state('account')"
              id="account"
            ></v-text-field>
            <v-text-field
              prepend-icon="lock"
              label="Password"
              label-for="input-password"
              description="Your password must be 4-20 characters"
              invalid-feedback="Your password is invalid. Please try again."
              type="password"
              v-model="password"
              :state="state('password')"
              id="password"
            ></v-text-field>
            <v-btn block dark color="red darken-4" @click="submit">LOG IN</v-btn><br>
            <p class="white red--text text--darken-4">{{ error.message }}</p>
            <span class="mt-4 text-decoration-underline grey--text" style="cursor: pointer;" @click="$router.push('/password')">Forgot your password?</span><br>
          </form>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
  <div id="loginbg">
    <vue-particles color="#B71C1C"></vue-particles>
  </div>
</div>
</template>

<script>
import PowerModeInput from 'power-mode-input'
export default {
  name: 'login',
  // data的話, 用v-bind
  data () {
    return {
      account: '',
      password: ''
    }
  },
  computed: {
    error: {
      get () {
        return this.$store.getters.error
      },
      set (value) {
        this.$store.commit('error', value)
      }
    }
  },
  mounted () {
    PowerModeInput.make('#account', {
      height: 5,
      tha: [0, 360],
      g: 0.5,
      num: 5,
      radius: 6,
      circle: true,
      alpha: [0.75, 0.1],
      color: 'random'
    })
    PowerModeInput.make('#password', {
      height: 5,
      tha: [0, 360],
      g: 0.5,
      num: 5,
      radius: 6,
      circle: true,
      alpha: [0.75, 0.1],
      color: 'random'
    })
  },
  methods: {
    state (type) {
      if (type === 'account') {
        if (this.account.length < 4 || this.account.length > 20) {
          return false
        } else {
          return true
        }
      } else if (type === 'password') {
        if (this.password.length < 4 || this.password.length > 20) {
          return false
        } else {
          return true
        }
      }
    },
    submit (event) {
      event.preventDefault()
      if (this.account.length < 4 || this.account.length > 20) {
        this.error.show = true
        this.error.message = 'Account format does not match'
      } else if (this.password.length < 4 || this.password.length > 20) {
        this.error.show = true
        this.error.message = 'Password format does not match'
      }
      this.axios.post(
        process.env.VUE_APP_APIURL + '/login',
        { account: this.account, password: this.password }
      )
        .then(response => {
          const data = response.data
          if (data.success) {
            // 呼叫 vuex 的登入
            this.error.show = false
            this.error.message = ''
            this.$store.commit('login', this.account)
            // 跳到登入後的相簿頁
            this.$router.push('/home')
          } else {
            // 不是就顯示回來的 message
            this.error.show = true
            this.error.message = data.message
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          this.error.show = true
          this.error.message = error.response.data.message
        })
    }
  }
}

</script>

<style lang="stylus">
#login
  font-family 'Noto Sans TC', sans-serif
  width 100%
  height 100%
  #loginbg
    z-index 0
    position absolute
    top 0
    left 0
    width 100%
    height 100%
  .abovebg
    z-index 999
  .text-xl-h2
    color #B71C1C
    text-shadow -1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray
</style>
