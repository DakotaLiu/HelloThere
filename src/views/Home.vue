<template>
  <div id="home">
    <v-container fluid style="padding:0;">
      <v-row>
        <v-col>
        <!-- 首圖 -->
          <div class="bg"></div>
          <!-- 首圖向量 -->
          <div class="content">
            <svg class="bg-shape" width="100%" height="467" viewBox="0 0 3000 487" preserveAspectRatio="xMinYMax meet">
            <path fill="#FFF" stroke="#fff" fill-opacity="#fff" stroke-opacity="#fff" d="M0 382c167 108 388 86 571 7 132-57 250-163 394-164 124-2 239 76 363 70 155-8 276-144 428-170 218-38 430 156 646 107 110-24 195-107 293-160 92-50 201-75 305-72v457H0z"></path>
            </svg>
          </div>
          <div class="content d-flex justify-center">
            <!-- 置中Logo & quote -->
            <div class="content-img-text-arrow white--text justify-center" style="pointer-events:none;">
              <v-img class="content-img" src="../assets/HelloThere.png"></v-img>
              <blockquote><em>People overestimate what they can do in a single day.<br> And underestimate what they can do in their whole lives.</em></blockquote>
              <!-- 箭頭 -->
              <div class="content-indicator mt-md-25 mt-xs-16">
                <svg class="icon icon-arrow"><use xlink:href="#icon-arrow"><svg viewBox="0 0 32 32" id="icon-arrow" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M29 19.9L17.6 31.3c-.9.9-2.3.9-3.2 0L3 19.9c-.9-.9-.9-2.3 0-3.2s2.3-.9 3.2 0l7.5 7.5V2.3C13.7 1 14.7 0 16 0s2.3 1 2.3 2.3v21.9l7.5-7.5c.4-.4 1-.7 1.6-.7s1.2.2 1.6.7c.9.9.9 2.3 0 3.2z"></path></svg></use></svg>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid style="padding:0;margin:0;" class="mt-16">
      <v-row justify-md-center>
        <v-col align-md-left col="12" md="6" class="d-flex flex-column align-center" data-aos="fade-up">
          <div class="text-xl-h1 text-lg-h2 text-md-h3 text-h4 text-center text-lg-right amber--text text--accent-2 mt-5 justify-center">TOGETHERNESS KNOWS NO BOUNDS</div>
          <div align-right class="text-xl-h3 text-lg-h4 text-md-h5 text-h6 text-center text-lg-right mt-5 mx-4 mx-md-5 mx-lg-2 mx-xl-3" style="color:#3ebeaa;">We may not be able to gather right now, but we can still connect in profound ways. Join HelloThere’s digital community for virtual gatherings, supportive friends, inspiring programming, and so much more.</div>
        </v-col>
        <v-col align-md-right col="12" md="6">
          <v-img align-left src="../assets/together.jpg"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid style="padding:0;" class="my-16 amber lighten-5">
      <h1 class="text-xl-h1 text-lg-h2 text-md-h3 red--text text--darken-4 py-5 d-flex justify-center" data-aos="fade-up">JOIN THE COMMUNITY</h1>
      <v-row justify-center>
        <v-col align-center cols="12" class="m-16 position-relative text-center" data-aos="fade-up">
          <v-btn x-large dark color="red darken-4" to="/apply" class="text-h5 pt-3 hvr-grow-shadow">Apply Now</v-btn>
        </v-col>
        <v-col align-center col="12" class="d-flex flex-column flex-md-row justify-md-center">
          <v-col justify-center align-md-center col="11" md="3" class="m-0 p-0" data-aos="flip-right" data-aos-duration="1500">
            <v-img src="../assets/join-1.jpeg" style="height:55vh;"></v-img>
            <h2>INTRODUCING GROUPS</h2>
            <span>Try out our in-app feature that lets members tap into The Wing network and gather over their shared interests and experiences. Plus: we're expanding the definition of Wing membership very soon — sign up now for early access!</span>
          </v-col>
          <v-col justify-center align-md-center col="11" md="3" class="m-0 p-0" data-aos="flip-right" data-aos-duration="1500">
            <v-img src="../assets/join-2.jpg" style="height:55vh;"></v-img>
            <h2>ATTEND AN EVENT</h2>
            <span>Our new event featuring everything from cooking classes to breathwork sessions and AMAs with political candidates let you connect to the HelloThere community from anywhere, anytime.</span>
          </v-col>
          <v-col justify-center align-md-center col="11" md="3" class="m-0 p-0" data-aos="flip-right" data-aos-duration="1500">
            <v-img src="../assets/join-3.jpg" style="height:55vh;"></v-img>
            <h2>WHY HELLOTHERE</h2>
            <span>Offering a community of dynamic members, along with covetable events and perks, HelloThere is much more than a organizer.</span>
          </v-col>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid style="padding:0;" class="my-16">
      <h1 class="text-xl-h1 text-lg-h2 text-md-h3 py-5 d-flex justify-center amber--text text--accent-2" data-aos="fade-up">What Our Members Say</h1>
      <v-row d-flex justify-center>
        <v-col align-center col="12" class="d-flex flex-column flex-md-row justify-md-center align-sm-center">
          <v-col justify-center align-md-center col="12" md="3" class="m-0 p-0"  data-aos="flip-right" data-aos-duration="1500">
          <figure class="snip1579" >
            <img src="https://i.postimg.cc/3xQK8g7V/p1.png" alt="profile-sample2"/>
              <figcaption>
                <h3>Sue Shei</h3>
                <h5>Founder</h5>
                <blockquote>
                  <p>'Which is worse, that everyone has his price, or that the price is always so low.'</p>
                </blockquote>
              </figcaption><a href="#"></a>
          </figure>
          </v-col>
          <v-col justify-center align-md-center col="12" md="3" class="m-0 p-0" data-aos="flip-right" data-aos-duration="1500">
          <figure class="snip1579">
            <img src="https://i.postimg.cc/Tw1x70qL/p2.png" alt="profile-sample2"/>
              <figcaption>
                <h3>Sue Shei</h3>
                <h5>Founder</h5>
                <blockquote>
                  <p>'Which is worse, that everyone has his price, or that the price is always so low.'</p>
                </blockquote>
              </figcaption><a href="#"></a>
          </figure>
          </v-col>
          <v-col justify-center align-md-center col="12" md="3" class="m-0 p-0" data-aos="flip-right" data-aos-duration="1500">
          <figure class="snip1579"><img src="https://i.postimg.cc/wj5977jv/p3.png" alt="profile-sample6"/>
            <figcaption>
              <h3>Will Barrow</h3>
              <h5>Public Relations</h5>
              <blockquote>
                <p>'The only skills I have the patience to learn are those that have no real application in life.'</p>
              </blockquote>
            </figcaption><a href="#"></a>
          </figure>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
.bg
  background url('../assets/homebg.jpg') no-repeat 50% 35%/cover
  display block
  position relative
  width 100vw
  height 95vh
  object-fit cover
  filter brightness(0.7)
  z-index 0
.content
  position absolute
  bottom 0
  left 0
  right 0
  top 0
  margin auto
  .content-img-text-arrow
    max-width 45vh
    top 0
    left 0
    position relative
    z-index 1
    text-align center
    .content-img
      max-width 25vh
      margin auto
    .content-indicator
      position absolute
      left 45%
      .icon
        display inline-block
        width 1.5rem
        height 1.5rem
        stroke-width 0
      .icon-arrow
          animation homeArrow 1.6s infinite cubic-bezier(.75,0,.15,1)
          opacity 1
          transition-delay .35s
      @keyframes homeArrow
        0%,100%
          transform translateY(0) scaleX(1)
        50%
          transform translateY(10px) scaleX(1.1)
  .bg-shape
    border-style none
    top 0
    left 0
    position relative
  @media (min-width: 375px) and (max-height:667px)  {
    .content-img-text-arrow{
      margin-top 215px
    }
    .bg-shape{
      margin-top 185px
    }
    .content-indicator{
      top 11%
    }
  }
  @media (max-width: 375px) and (min-height:812px)  {
    .content-img-text-arrow{
      margin-top 245px
    }
    .bg-shape{
      margin-top 320px
    }
    .content-indicator{
      top 12%
    }
  }
  @media (min-width: 414px) and (max-width:599px) {
    .content-img-text-arrow{
      margin-top 225px
    }
    .bg-shape{
      margin-top 249px
    }
    .content-indicator{
      top 12%
    }
  }
  @media (min-width: 600px) and (max-width:1023px) {
    .content-img-text-arrow{
      margin-top 325px
    }
    .bg-shape{
      margin-top 527px
    }
    .content-indicator{
      top 12%
    }
  }
  @media (min-width: 1024px) and (max-width:1279px) {
    .content-img-text-arrow{
      margin-top 405px
    }
    .bg-shape{
      margin-top 854px
    }
    .content-indicator{
      top 22%
    }
  }
  @media (min-width: 1280px) and (max-width:1439px) {
    .content-img-text-arrow{
      margin-top 295px
    }
    .bg-shape{
      margin-top 461px
    }
    .content-indicator{
      top 18%
    }
  }
  @media (min-width: 1440px) and (max-width:1919px) {
    .content-img-text-arrow{
      margin-top 255px
    }
    .bg-shape{
      margin-top 415px
    }
    .content-indicator{
      top 18%
    }
  }
  @media (min-width: 1920px) {
    .content-img-text-arrow{
      margin-top 215px
    }
    .bg-shape{
      margin-top 455px
    }
    .content-indicator{
      top 15%
    }
  }

.snip1579 {
  position: relative;
  display: inline-block;
  overflow: hidden;
  // margin: 10px;
  // min-width: 300px;
  // max-width: 380px;
  // width: 100%;
  // background-color: lightblue;
  color: #ffffff;
  text-align: left;
  font-size: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
.snip1579 * {
  transition: all 0.35s;
  box-sizing: border-box;
}
.snip1579 img {
  max-width: 100%;
  vertical-align: top;
}
.snip1579 figcaption {
  position: absolute;
  height: 75px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  overflow: hidden;
  padding: 15px;
  background-color: #3ebeaa;
}
.snip1579 h3 {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin: 3px 0;
}
.snip1579 h5 {
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
  color: #000;
  letter-spacing: 1px;
}
.snip1579 blockquote {
  padding: 0;
  margin: 0;
  font-style: italic;
  font-size: 2em;
}
.snip1579 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-text-decoration none
}
.snip1579:hover figcaption,
.snip1579.hover figcaption {
  height: calc(85%);
}
.hvr-grow-shadow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
.hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
