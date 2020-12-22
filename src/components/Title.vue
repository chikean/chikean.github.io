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
    <v-row align="center" justify="center" class="my-16" cols="12">
      <v-col xs="12" md="8">
        <h2 class="display-1 text--primary mb-10" align="center">
          Recent news
        </h2>
        <v-card elevation="2" outlined>
          <v-card-text>
            <div></div>
            <p class="text-subtitle-1 text--primary">
              Symantec Enterprise Blogs / Expert Perspectives
            </p>
            <p class="text-weight-bold text-h5 text-md-h4">
              Phishing for a Proactive Security Culture
            </p>
            <div class="text--primary">
              This article details my approach for driving security culture
              change within Symantec and NortonLifeLock, using an example of one
              of the security programs that I managed.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="teal accent-4"
              align="right"
              href="https://symantec-enterprise-blogs.security.com/blogs/expert-perspectives/phishing-proactive-security-culture"
            >
              Read More
              <v-icon size="24px" class="ml-5"> mdi-launch </v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
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
