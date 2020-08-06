<template>
  <div id="stepthree">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" class="align-center">
          <h1 class="red--text text--darken-4">HelloThere’s mission is the professional, civic, social, and economic advancement of women through community.</h1>
          <h3 class="mt-3">How have you promoted or supported this mission?</h3>
            <v-textarea
              counter
              :rules="textRules"
              :value="Q3Answer"
              hint="Volunteer with a local group, organize with Planned parenthood...etc"
              color="#4057a2"
            ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textRules: [v => v.length <= 200 || 'Max 200 characters']
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>
