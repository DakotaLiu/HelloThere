<template>
  <div id="designyourlove">
    <v-container fluid>
      <v-row class="justify-end">
        <v-col cols="12" md="6">
            <!-- <div class="bubble-container d-flex">
              <div class="bubble-mask">
                <div class="bubble-image">
                  <v-img src="../assets/bubble-image.jpg"></v-img>
                </div>
              </div>
            </div> -->
        </v-col>
      </v-row>
    </v-container>
  <!-- <div id="puzzle-animation">
    <lottie-player
    class="d-flex justify-end align-self-center flex-md-grow-1"
    :src="lottie"
    :options="{
    autoplay: true,
    loop:true,
    speed: 0.75,
    width: '384px',
    height: '270px',
    }"
/>
  <h1>愛情</h1>
  </div> -->
  </div>
</template>

<script>
export default {
  name: 'Design Your Love',
  data () {
    return {
      lottie: 'https://assets4.lottiefiles.com/packages/lf20_3TC6zI.json'
    }
  }
}
</script>

<style lang="stylus">
  #designyourlove
    // font-family 'Chewy', cursive
    // font-family 'Lato', sans-serif
    font-family 'Noto Sans TC', sans-serif
  .bubble-container
    display flex
    // min-height 750px
    // max-height 87.5rem
    margin 100px
    position relative
    // z-index 97
    .bubble-mask
      mask-image url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' preserveAspectRatio='none'%3E%3Cpath d='M13.7.3C12-.1 10-.2 8.3.6c-1.3.7-2.2 1.7-3.1 3-1.3 1.9-2.7 3.8-3.5 6.1C.8 12 .5 14.5.3 17c-.2 2.2-.4 4.5-.2 6.8s1.1 4.5 2.6 6c2.9 2.8 9.5 2.5 13.3 1.8 3.1-.5 6.2-1 9-2.5 3.5-1.8 4.4-5.1 5.7-9.1 1.6-4 2.3-13.1-1.5-15.6-4.5-2.9-10.3-3-15.5-4.1z'/%3E%3C/svg%3E%0A")
      width 1015px
      left -20%
      margin-left 40px
      mask-position bottom left
      height 100%
      max-height 100vh
      min-height 750px
      position absolute
      top 0
      transform scaleX(1)
      mask-repeat no-repeat
      z-index 0
      &:after
        content ''
        background-color rgba(0,0,0,.15)
        bottom 0
        left 0
        right 0
        position absolute
        height 100%
        transition opacity .2s
        z-index 2
      .bubble-image
        display block
        height 100%
        width 100%
        overflow hidden
        position relative
        object-position 70% 30%
        transform scaleX(1)
        height: 64vh;
        left: -15px;
        position: relative;
        mask-size: 150% 130%;
        transform: scaleX(-1);
        width: calc(100% + 30px);
</style>
