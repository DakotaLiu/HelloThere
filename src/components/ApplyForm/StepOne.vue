<template>
  <div id="stepone">
    <form>
    <v-container>
      <v-row justify-center>
        <v-col
          align-center
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="account"
            :rules="accountRules"
            label="Account"
            :counter="20"
            required
            prepend-icon="person"
            color="#4057a2"
          ></v-text-field>
        </v-col>
        <v-col
          align-center
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            :counter="20"
            required
            prepend-icon="https"
            color="#4057a2"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify-center>
        <v-col
          align-center
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            prepend-icon="send"
            color="#4057a2"
          ></v-text-field>
        </v-col>
        <v-col
          align-center
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            required
            color="#4057a2"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify-center>
        <v-col
          align-center
          cols="12"
          sm="6"
        >
          <v-radio-group v-model="sex" row prepend-icon="wc" hint="sex">
            <v-radio label="Male" value="Male" color="amber darken-1"></v-radio>
            <v-radio label="Female" value="Female" color="amber darken-1"></v-radio>
          </v-radio-group>
        </v-col>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Birthday date"
              prepend-icon="event"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            ref="picker"
            v-model="date"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
      </v-row>
      <v-row>
        <v-col
          align-center
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="title"
            :rules="textRules"
            label="Title"
            required
            prepend-icon="picture_in_picture"
            color="#4057a2"
          ></v-text-field>
        </v-col>
        <v-col
          align-center
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="role"
            :rules="textRules"
            label="Role at firm"
            required
            prepend-icon="work"
            color="#4057a2"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          align-center
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="company"
            :rules="textRules"
            label="Company"
            required
            prepend-icon="business"
            color="#4057a2"
          ></v-text-field>
        </v-col>
        <v-col
          align-center
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="location"
            :rules="textRules"
            label="Location"
            required
            prepend-icon="room"
            color="#4057a2"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          align-center
          cols="12"
        >
          <v-textarea
            v-model="hobby"
            auto-grow
            label="Hobby"
            rows="1"
            :counter="100"
            color="#4057a2"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          align-center
          cols="12"
        >
          <v-textarea
            v-model="intro"
            auto-grow
            label="Intro"
            rows="1"
            :counter="200"
            color="#4057a2"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          align-center
          cols="12"
        >
          <v-textarea
            v-model="looking"
            auto-grow
            label="What are you looking for in this community"
            rows="1"
            :counter="200"
            color="#4057a2"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="I would like to receive emails from HelloThere on new openings and announcements."
            color="amber darken-1"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-container>
    </form>
  </div>
</template>

<script>
export default {
  validations: {
    // name: { required },
    // email: { required, email },
    checkbox: {
      checked (val) {
        return val
      }
    }
  },
  data () {
    return {
      account: '',
      password: '',
      email: '',
      name: '',
      radio: null,
      title: '',
      role: '',
      company: '',
      location: '',
      hobby: '',
      intro: '',
      looking: '',
      date: null,
      menu: false,
      checkbox: false
    }
  }
  // methods: {
  //   save (date) {
  //     this.$refs.menu.save(date)
  //   }
  // },
  // computed: {
  //   checkboxErrors () {
  //     const errors = []
  //     if (!this.$v.checkbox.$dirty) return errors
  //     !this.$v.checkbox.checked && errors.push('You must agree to continue!')
  //     return errors
  //   },
  //   selectErrors () {
  //     const errors = []
  //     if (!this.$v.select.$dirty) return errors
  //     !this.$v.select.required && errors.push('Item is required')
  //     return errors
  //   },
  //   nameErrors () {
  //     const errors = []
  //     if (!this.$v.name.$dirty) return errors
  //     !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
  //     !this.$v.name.required && errors.push('Name is required.')
  //     return errors
  //   },
  //   emailErrors () {
  //     const errors = []
  //     if (!this.$v.email.$dirty) return errors
  //     !this.$v.email.email && errors.push('Must be valid e-mail')
  //     !this.$v.email.required && errors.push('E-mail is required')
  //     return errors
  //   }
  // },
  // watch: {
  //   menu (val) {
  //     val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
  //   }
  // }
}
</script>
