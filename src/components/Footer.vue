<template>
  <v-footer color="lighten-1" padless absolute>
    <v-row justify="center">
      <v-btn
        v-for="icon in icons"
        :key="icon.icon"
        :href="icon.href"
        class="ma-4 white--text social-btn"
        icon
      >
        <v-icon size="24px">
          {{ icon.icon }}
        </v-icon>
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: "mdi-linkedin", href: "https://www.linkedin.com/in/chris-chow/" },
      { icon: "mdi-github", href: "https://github.com/chikean" },
    ],
  }),
};
</script>

<style lang="css" scoped>
.social-btn:hover * {
  color: #79cfd9;
}
</style>