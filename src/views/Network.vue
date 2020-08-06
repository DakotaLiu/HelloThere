<template>
  <div id="network">
    <v-container>
      <v-row justify-center>
          <v-col align-left cols="12" md="4" class="d-flex flex-column align-center mt-16" data-aos="fade-right">
            <v-avatar center size="250" class="ma-auto">
              <v-img :src="member.photo"></v-img>
            </v-avatar>
            <div class="my-5">
            <h4><v-icon class="justify-center mr-3 mb-2">person</v-icon>{{ member.role }}</h4>
            <h4><v-icon class="justify-center mr-3 mb-2">location_on</v-icon>{{ member.local }}</h4>
            <h4><v-icon class="justify-center mr-3 mb-2">business_center</v-icon>{{ member.title }} at {{ member.firm }}</h4>
            </div>
            <div class="justify-center">
              <v-btn large color="light-blue darken-4" class="white--text mx-6">Follow</v-btn>
              <v-btn outlined large color="light-blue darken-4 mx-6">Message</v-btn>
            </div>
          </v-col>
          <v-col align-right cols="12" md="8" class="ma-auto" data-aos="fade-left">
            <h1>Hi, I'm {{ member.name }}</h1>
            {{ member.intro }}
            <h1 class="mt-5">I'm looking for</h1>
            {{ member.looking }}
          </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify-end>
        <v-col align-center cols="12" md="4" lg="3" class="mt-16 ml-md-5 ml-lg-10 mx-xl-16">
            <p class="text-sm-h5 text-lg-h6">Contact</p>
            <v-divider class="mb-3 mt-n3"></v-divider>
            <v-btn icon class="mr-2" color="#0e76a8" :href="member.linkedin" target="_blank" v-if="member.linkedin !== undefined">
              <v-icon>$vuetify.icons.LinkedinIcon</v-icon>
            </v-btn>
            <v-btn icon class="mr-2" color="#3b5998" :href="member.fb" target="_blank" v-if="member.fb !== undefined">
              <v-icon>$vuetify.icons.FBIcon</v-icon>
            </v-btn>
            <v-btn icon class="mr-2" color="#333" :href="member.github" target="_blank" v-if="member.github !== undefined">
              <v-icon>$vuetify.icons.GithubIcon</v-icon>
            </v-btn>
            <v-btn icon class="mr-2" color="#E2432A" :href="member.gitlab" target="_blank" v-if="member.github !== undefined">
              <v-icon>$vuetify.icons.GitlabIcon</v-icon>
            </v-btn>
            <v-btn icon class="mr-2" color="black" :href="member.medium" target="_blank" v-if="member.medium !== undefined">
              <v-icon>$vuetify.icons.MediumIcon</v-icon>
            </v-btn>
            <v-btn icon class="mr-2" color="#FF0000" :href="member.yt" target="_blank" v-if="member.yt !== undefined">
              <v-icon>$vuetify.icons.YTIcon</v-icon>
            </v-btn>
            <v-btn icon class="mr-2" color="#E1306C" :href="member.ig" target="_blank" v-if="member.ig !== undefined">
              <v-icon>$vuetify.icons.IGIcon</v-icon>
            </v-btn>
            <v-btn icon class="mr-2" color="amber" :href="member.email" target="_blank" v-if="member.email !== undefined">
              <v-icon>mdi-email</v-icon>
            </v-btn>
            <v-btn icon class="mr-2" color="orange" :href="member.link" target="_blank" v-if="member.link !== undefined">
              <v-icon>mdi-link</v-icon>
            </v-btn>
        </v-col>
      </v-row>
    </v-container>
</div>
</template>
<script>
export default {
  name: 'Network',
  components: {
  },
  data () {
    return {
      members: [
        { id: 1, name: 'Praveen Agrawal', title: 'Biochemist', role: 'Associate Director', firm: 'LeadInvent Technologies', local: 'London', photo: 'https://a.storyblok.com/f/50623/360x360/0aea22d057/front-hover.jpg', linkedin: 'https://www.linkedin.com/company/amd/', github: 'https://github.com/jeremyhamm', medium: 'https://medium.com/', yt: 'https://www.youtube.com/c/ETJEnglish', intro: 'A visual designer & art director with a passion for luxury market through a global East-West Approach. Honest and curious, I love challenges and to trigger discussions in order to bring new ideas. Until now, I have put my abilities of analysis/understanding of socio-cultural groups and communication contexts, to expend my expertise of luxury product and services - from brand identity and strategy, to client experience through multimedia solutions. My approach of communication and design takes inspiration in fine arts, fashion and a global pop culture, that I like to apply through strategic lifestyle storytellings.', looking: 'Open for new opportunnties. Contact me if interested in the profile' },
        { id: 2, name: 'Yamini Aiyar', title: 'Accountability entrepreneur', firm: 'LeadInvent Technologies', photo: 'https://a.storyblok.com/f/50623/360x360/010d528e6b/front-hover.jpg', linkedin: 'https://www.linkedin.com/company/intel-corporation/', email: 'mailto:designyourlove.service@gmail.com', link: 'https://zh.wikipedia.org/' },
        { id: 3, name: 'Reshma Anand', title: 'Agri-business entrepreneur', firm: 'ayzh Inc.', photo: 'https://a.storyblok.com/f/50623/360x360/bf162423d8/front-hover.jpg', gitlab: 'https://about.gitlab.com/', ig: 'https://www.instagram.com/chanelofficial/', yt: 'https://www.youtube.com/c/ETJEnglish' },
        { id: 4, name: 'Zubaida Bai', title: 'Maternal health innovator', firm: ' Vibrant Data Labs, Berkeley', photo: 'https://a.storyblok.com/f/50623/360x360/91f3773ad5/front-hover.jpg', github: 'https://github.com/obsproject', fb: 'https://zh-tw.facebook.com/pchome24h', yt: 'https://www.youtube.com/c/ETJEnglish' },
        { id: 5, name: 'Kavita aliga', title: 'Singer + vocal coach', firm: ' Desi Music Entertainment', photo: 'https://a.storyblok.com/f/50623/360x360/47384b2f0f/front-hover.jpg', gitlab: 'https://about.gitlab.com/', ig: 'https://www.instagram.com/chanelofficial/', medium: 'https://medium.com/' },
        { id: 6, name: 'Eric LBerlo', title: 'Ecological networks scientist', firm: 'LeadInvent Technologies', photo: 'https://a.storyblok.com/f/50623/360x360/785fd92423/front-hover.jpg', fb: 'https://zh-tw.facebook.com/pchome24h', gitlab: 'https://about.gitlab.com/', medium: 'https://medium.com/', link: 'https://zh.wikipedia.org/' },
        { id: 7, name: 'Jennifer Bréa', title: 'Political blogger + PhD student', firm: 'Canary in a Coal Mine, Princeton', photo: 'https://a.storyblok.com/f/50623/360x360/0c2c08a902/front-hover.jpg', linkedin: 'https://www.linkedin.com/company/google/', ig: 'https://www.instagram.com/chanelofficial/', link: 'https://zh.wikipedia.org/' },
        { id: 8, name: 'Rachel Armstrong', title: 'Doctor + architecture researcher', firm: 'The University of Greenwich', photo: 'https://a.storyblok.com/f/50623/360x360/7df93cba3e/front-hover.jpg', github: 'https://github.com/obsproject', fb: 'https://zh-tw.facebook.com/pchome24h', email: 'mailto:designyourlove.service@gmail.com', yt: 'https://www.youtube.com/c/ETJEnglish' }
      ]
    }
  },
  methods: {

  },
  computed: {
    id () {
      return parseInt(this.$route.params.id)
    },
    member () {
      return this.members.filter(m => {
        return m.id === this.id
      })[0]
    }
  },
  mounted () {

  }
}

</script>

<style lang="stylus">
#network
  font-family 'Noto Sans TC', sans-serif
</style>
