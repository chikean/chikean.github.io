<template>
  <v-container>
    <v-row align="center" cols="12">
      <v-col
        class="mb-4 px-15 px-md-5 text-sm-left text-center"
        xs="12"
        md="6"
        cols="12"
      >
        <h1 class="text-h1 font-weight-bold mb-3">Chris Chow</h1>
        <h2 class="text-subtitle-1">
          Program manager, communicator, and technologist all-rounder.
        </h2>
      </v-col>
      <v-col xs="12" md="6" cols="12" class="px-15">
        <p>
          I'm currently in the final stages of completing my PhD in Computer
          Science, in which I research the viability of deep learning to infer
          when users intuitively feel like they've found something relevant to
          their information needs. My previous experiences have revolved around
          managing transformational programs, particularly in cyber security.
        </p>
        <p>
          I am a technologist all-rounder with an ability to adapt and quickly
          master new skills. I have applied experiences across many aspects of
          computer science, including human-computer interaction, cyber
          security, machine learning, and web development.
        </p>
        <p>
          My passion for technology and for helping users adopt, use, and
          understand technology has led me to frequently participate in
          outreach, teaching and community engagement.
        </p></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Title",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
