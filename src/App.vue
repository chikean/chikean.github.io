<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-main>
      <div id="app">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Anonymous+Pro&family=Source+Sans+Pro&display=swap");

p {
  font-family: "Source Sans Pro";
  font-size: 1.3rem;
}

.beb {
  font-family: "Anonymous Pro";
  letter-spacing: 1px;
  text-decoration: underline;
  text-underline-offset: 0.5em;
}
</style>
