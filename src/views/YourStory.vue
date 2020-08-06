<template>
  <div id="yourstory">
    <v-container>
      <v-row justify-center class="ma-auto mt-16">
        <v-col align-self-center xs="12" sm="6" lg="4" v-for="(story, index) in stories" :key="index">
          <v-hover>
              <v-card id="storyCard"
                slot-scope="{ hover }" :class="`elevation-${hover ? 10 : 2}`" class="ma-2 text-decoration-none" @click="goto(index)">
                <v-img v-bind:src="story.photo"></v-img>
                <v-card-title>
                    <h3>{{ story.title }}</h3>
                </v-card-title>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img class="elevation-6" :src="story.authorPhoto"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ story.author }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'YourStory',
  components: {
  },
  data () {
    return {
      stories: [
        {
          id: 1,
          photo: 'https://storage.googleapis.com/crossing-cms-cwg-tw/article/202006/article-5eed704f8313d.jpg',
          title: 'Why I left my job at McKinsey',
          author: 'Stephen Turban',
          authorPhoto: 'https://cw1.tw/CW/crossing/images/article/201801/writer-thumbnail-5a5da119186f5.jpg'

        },
        {
          id: 2,
          photo: 'https://storage.googleapis.com/crossing-cms-cwg-tw/article/202006/article-5eee032a77a1b.jpg',
          title: 'Life lessons I have learnt from programming',
          author: 'Alice Yang',
          authorPhoto: 'https://cw1.tw/CW/images/blog/C1476841587912.jpg'
        },
        {
          id: 3,
          photo: 'https://picsum.photos/1170/722/?random=1',
          title: 'What It’s REALLY Like to Be a Disney Cast Member',
          author: 'Sierra Vieregge',
          authorPhoto: 'https://i.pravatar.cc/200?img=47'
        },
        {
          id: 4,
          photo: 'https://picsum.photos/1170/722/?random=2',
          title: 'These women entrepreneurs started an edtech platform to enable peer learning',
          author: 'Tenzin Norzom',
          authorPhoto: 'https://i.pravatar.cc/200?img=5'
        }],
      show: false
    }
  },
  methods: {
    goto (index) {
      this.$router.push('/yourstory/' + this.stories[index].id)
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
    story () {
      return this.stories.filter(s => {
        return s.id === this.id
      })
    }
  }
}

</script>

<style lang="stylus">
#yourstory
  font-family 'Noto Sans TC', sans-serif
  #storyCard:hover
    color #3ebeaa
</style>
