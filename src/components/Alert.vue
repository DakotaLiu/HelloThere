<template>
  <div id="alert">
    <!-- <v-dialog light v-model="error.show" max-width="300"> -->
      <v-alert
        type="error"
        v-model="error.show"
        @click="removeErrors"
      >
        {{ error.message }}
      </v-alert>
    <!-- </v-dialog> -->
  </div>
</template>

<script>
export default {
  name: 'Alert',
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
  methods: {
    removeErrors () {
      this.error.show = false
      this.error.message = ''
    }
  }
}
</script>
