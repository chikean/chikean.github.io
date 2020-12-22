<template>
  <v-app>
    <v-spacer></v-spacer>
    <v-main>
      <Title />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Title from "./components/Title";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Title,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
