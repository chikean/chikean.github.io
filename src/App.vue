<template>
  <v-app>
    <v-spacer></v-spacer>
    <v-main>
      <Title />
    </v-main>
  </v-app>
</template>

<script>
import Title from "./components/Title";

export default {
  name: "App",

  components: {
    Title,
  },

  data: () => ({
    //
  }),
};
</script>
