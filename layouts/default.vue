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
        <v-btn text @click="followLink('https://facebook.com')">
          Facebook
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>
<style scoped>
.custom-logo {
  height: 80%;
}
</style>
