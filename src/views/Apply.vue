<template>
  <div id="apply">
    <lottie-player
      class="mt-16 d-flex flex-column align-center"
      :src="lottie"
      :options="{
      autoplay: true,
      loop:true,
      speed: 1,
      width: '300px',
      height: '300px',
      }"
    />
    <v-container>
      <v-row class="justify-center">
        <v-col cols="11" md="8">
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1" color="#4057a2">Personal Information</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2" color="#4057a2">All About You</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3" color="#4057a2">Join Our Mission</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <StepOne/>
                <v-btn
                  dark
                  color="#4057a2"
                  @click="e1 = 2"
                >
                  Continue
                </v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <StepTwo/>
                <v-btn
                  dark
                  color="#4057a2"
                  @click="e1 = 3"
                >
                  Continue
                </v-btn>
                <v-btn text @click="e1 = 1">Back</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <StepThree/>
                <v-btn
                  dark
                  color="#4057a2"
                  @click="submit"
                >
                  Submit
                </v-btn>
                <v-btn text @click="e1 = 2">Back</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StepOne from '../components/ApplyForm/StepOne'
import StepTwo from '../components/ApplyForm/StepTwo'
import StepThree from '../components/ApplyForm/StepThree'
export default {
  name: 'apply',
  components: {
    StepOne,
    StepTwo,
    StepThree
  },
  data () {
    return {
      lottie: 'https://assets6.lottiefiles.com/packages/lf20_RQZAm1.json',
      e1: 1,
      steps: 2,
      submitStatus: null
    }
  },
  computed: {},
  methods: {
    nextStep (n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    },
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  },
  watch: {
    steps (val) {
      if (this.e1 > val) {
        this.e1 = val
      }
    }
  }
}
</script>

<style lang="stylus">

</style>
