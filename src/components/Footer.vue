<template>
<v-footer padless class="mt-16">
  <!-- <v-container fluid class=" mb-n8 amber lighten-5" style="background:navy;"> -->
    <!-- <v-row class="justify-center no-gutters">
      <v-col col="6" sm="2">
        <v-img src="../assets/mini-logo.png" style="height:37px; width:151px;"></v-img>
      </v-col>
      <v-col col="6" sm="2">
        <v-btn
        v-for="(link, index) in links"
        :key="index"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
        </v-btn>
      </v-col>
      <v-col col="6" sm="2">
      <v-list class="mt-4">
        <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route" class="mt-4">
            <v-list-item-content>
                <v-list-item-title>{{link.text}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-col> -->
      <!-- <v-col col="6" sm="2">
        <h5>Contact</h5>
        <a href="mailto:support@hellothere.com" target="_blank" title="Email us">support@hellothere.com</a><br>
        <v-btn icon color="red darken-4"
        href="https://www.facebook.com/haounison/"
        target="_blank"
        class="mt-3"
        >
        <v-icon>$vuetify.icons.FBIcon</v-icon>
      </v-btn>
      <v-btn icon color="red darken-4"
        href="https://www.instagram.com/designyourlove.service/"
        target="_blank"
        class="mt-3 ml-3"
        >
        <v-icon>$vuetify.icons.IGIcon</v-icon>
      </v-btn>
      </v-col> -->
    <!-- </v-row> -->
  <!-- </v-container> -->
  <v-container id="wave-container">
  <span class="d-flex justify-center no-gutters" style="position:relative;z-index:999;">&copy; HelloThere 2020 - Copyright Reserved</span>
    <div class="wave"></div>
  </v-container>
</v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      links: [
        { text: 'Network', route: '/network' },
        { text: 'Events', route: '/events' },
        { text: 'Your Story', route: '/yourstory' },
        { text: 'Design Your Love', route: '/designyourlove' },
        { text: 'Career Counseling ', route: '/careercounseling' },
        { text: 'Shop', route: '/shop' },
        { text: 'About Us', route: '/aboutus' }
      ]
    }
  }
}
</script>

<style lang="stylus">
// a
//   text-decoration none
//   color black
#wave-container {
  width: 100%;
  height: 15vh;
  background-size: cover;
  background-attachment: fixed;
  // z-index 999
}

.wave {
  position: absolute;
  width: 100%;
  /*height from the svg file*/
  height: 140px;
  bottom: 0;
  left: 0;
  background: url("https://d3o3obo12bi5zc.cloudfront.net/assets/waves/sep-wave-turquoise-eb9803e2320ffb5e85be14a0cbd26ef397f02c41f0b12649664701c4ed81de59.svg");
  animation: waves 10s linear infinite;
}
  // background: url("https://d3o3obo12bi5zc.cloudfront.net/assets/waves/sep-wave-orange-dark-66f81137568d9d7a50628d6929388109145e88daf66d0b47db4c4acc29cde6bb.svg");

#wave-container .wave:before {
  content:'';
  width: 100%;
  height: 140px;
  background: url("https://d3o3obo12bi5zc.cloudfront.net/assets/waves/sep-wave-turquoise-light-9e2d304e9cf074b3ab319de5783f228cdf9588392a2014e8c347e796aff0d9f9.svg");
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
  animation: waves-reverse 10s linear infinite;
}

#wave-container .wave:after {
  content:'';
  width: 100%;
  height: 140px;
  background: url("https://d3o3obo12bi5zc.cloudfront.net/assets/waves/sep-wave-turquoise-light-9e2d304e9cf074b3ab319de5783f228cdf9588392a2014e8c347e796aff0d9f9.svg");
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.6;
  animation-delay: -5s;
  animation: waves 20s linear infinite;
}

@keyframes waves {
  0% {
    background-position: 0;
  }
  100% {
    /* from width of the svg file */
    background-position: 1600px;
  }
}

@keyframes waves-reverse {
  0% {
    background-position: 1600px;
  }
  100% {
    background-position: 0;
  }
}
</style>
