<template>
  <div id="steptwo">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" class="align-center">
          <h3>You’re putting together the dinner party of your dreams. Who are your top three guests?</h3>
            <v-textarea
              counter
              :rules="textRules"
              :value="Q1Answer"
              hint="Living or dead"
              color="#4057a2"
            ></v-textarea>
          <h3>What's something you're proud of?</h3>
            <v-textarea
              counter
              :rules="textRules"
              :value="Q2Answer"
              hint="Don't be shy, take up space!"
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
  }
}
</script>
