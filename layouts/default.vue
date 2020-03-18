<template>
  <v-app>
    <v-app-bar
      fixed
      elevate-on-scroll
      app
      color="black"
    >
      <img class="custom-logo" src="~/static/logo.png" alt="Covid-18 Updates">
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="followLink('https://www.who.int/')">
          WHO
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text @click="followLink('https://www.gov.ph/')">
          DOH
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <nuxt/>
    </v-content>

    <v-footer
      dark
      padless
    >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="lighten-2 py-4 text-center white--text"
        cols="12"
      >
        Data provided by third party API.
      </v-col>
      <v-col
        class="lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Covid-19 Updates</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>
<style scoped>
.custom-logo {
  height: 80%;
}
</style>
