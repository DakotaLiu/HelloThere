<template>
  <div id="networkgroup">
    <div id="puzzle-animation" data-aos="fade-up">
      <lottie-player
      class="d-flex justify-center align-self-center flex-md-grow-1"
      :src="lottie"
      :options="{
      autoplay: true,
      loop:true,
      speed: 1,
      width: '326px',
      height: '302px',
      }"
  />
    </div>
    <v-container>
      <v-row justify-center class="ma-auto">
        <v-col align-self-center xs="12" sm="6" lg="3" xl="2" v-for="(member, index) in members" :key="index">
          <v-hover>
              <v-card id="card"
                slot-scope="{ hover }" :class="`elevation-${hover ? 10 : 2}`" class="ma-2 text-decoration-none" @click="goto(index)">
                <v-img v-bind:src="member.photo"></v-img>
                <v-card-title>
                    <h4>{{ member.name }}</h4>
                </v-card-title>
                <v-card-subtitle class="text--primary">
                    <span>{{ member.title }}</span><br>
                    <span>{{ member.firm }}</span><br>
                </v-card-subtitle>
              </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'NetworkGroup',
  components: {
  },
  data () {
    return {
      lottie: 'https://assets8.lottiefiles.com/packages/lf20_zkKEST.json',
      members: [
        { id: 1, name: 'Praveen Agrawal', title: 'Biochemist', firm: 'LeadInvent Technologies', photo: 'https://a.storyblok.com/f/50623/360x360/0aea22d057/front-hover.jpg', linkedin: 'https://www.linkedin.com/company/amd/', github: 'https://github.com/jeremyhamm', medium: 'https://medium.com/', yt: 'https://www.youtube.com/c/ETJEnglish' },
        { id: 2, name: 'Yamini Aiyar', title: 'Accountability entrepreneur', firm: 'LeadInvent Technologies', photo: 'https://a.storyblok.com/f/50623/360x360/010d528e6b/front-hover.jpg', linkedin: 'https://www.linkedin.com/company/intel-corporation/', email: 'mailto:designyourlove.service@gmail.com', link: 'https://zh.wikipedia.org/' },
        { id: 3, name: 'Reshma Anand', title: 'Agri-business entrepreneur', firm: 'ayzh Inc.', photo: 'https://a.storyblok.com/f/50623/360x360/bf162423d8/front-hover.jpg', gitlab: 'https://about.gitlab.com/', ig: 'https://www.instagram.com/chanelofficial/', yt: 'https://www.youtube.com/c/ETJEnglish' },
        { id: 4, name: 'Zubaida Bai', title: 'Maternal health innovator', firm: ' Vibrant Data Labs, Berkeley', photo: 'https://a.storyblok.com/f/50623/360x360/91f3773ad5/front-hover.jpg', github: 'https://github.com/obsproject', fb: 'https://zh-tw.facebook.com/pchome24h', yt: 'https://www.youtube.com/c/ETJEnglish' },
        { id: 5, name: 'Kavita aliga', title: 'Singer + vocal coach', firm: ' Desi Music Entertainment', photo: 'https://a.storyblok.com/f/50623/360x360/47384b2f0f/front-hover.jpg', gitlab: 'https://about.gitlab.com/', ig: 'https://www.instagram.com/chanelofficial/', medium: 'https://medium.com/' },
        { id: 6, name: 'Eric LBerlo', title: 'Ecological networks scientist', firm: 'LeadInvent Technologies', photo: 'https://a.storyblok.com/f/50623/360x360/785fd92423/front-hover.jpg', fb: 'https://zh-tw.facebook.com/pchome24h', gitlab: 'https://about.gitlab.com/', medium: 'https://medium.com/', link: 'https://zh.wikipedia.org/' },
        { id: 7, name: 'Jennifer Bréa', title: 'Political blogger + PhD student', firm: 'Canary in a Coal Mine, Princeton', photo: 'https://a.storyblok.com/f/50623/360x360/0c2c08a902/front-hover.jpg', linkedin: 'https://www.linkedin.com/company/google/', ig: 'https://www.instagram.com/chanelofficial/', link: 'https://zh.wikipedia.org/' },
        { id: 8, name: 'Rachel Armstrong', title: 'Doctor + architecture researcher', firm: 'The University of Greenwich', photo: 'https://a.storyblok.com/f/50623/360x360/7df93cba3e/front-hover.jpg', github: 'https://github.com/obsproject', fb: 'https://zh-tw.facebook.com/pchome24h', email: 'mailto:designyourlove.service@gmail.com', yt: 'https://www.youtube.com/c/ETJEnglish' }
      ],
      show: false
    }
  },
  methods: {
    goto (index) {
      this.$router.push('/network/' + this.members[index].id)
    }
  },
  computed: {
    // filtered () {
    //   return this.members.filter(member => {
    //     for (const key in member) {
    //       if (member[key].includes(this.keyword)) return true
    //       else return false
    //     }
    //   })
    // }
    id () {
      return parseInt(this.$route.params.id)
    },
    member () {
      return this.members.filter(m => {
        return m.id === this.id
      })
    }
  }
}

</script>

<style lang="stylus">
#networkgroup
  font-family: 'Noto Sans TC', sans-serif;
  #puzzle-animation
    margin-top 70px
</style>
