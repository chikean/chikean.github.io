<template>
  <v-container fluid class="pa-0">
    <v-container fluid class="my-5">
      <v-container class="my-md-15">
        <v-row class="mt-md-16">
          <v-col>
            <h1
              class="text-h1 font-weight-black mb-3 primary--text text-uppercase text-center text-md-left"
            >
              Chris Chow
            </h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2 class="beb text-center text-md-left">
              Technical specialist, program manager, and communicator.
            </h2>
            <p class="mt-10">
              I'm a technical program manager with experience delivering custom
              end-to-end solutions for highly complex problems, particularly in
              cyber security. I develop engaging and impactful programs using a
              blend of data science, software engineering, and design skills.
            </p>
            <p>
              I'm a strong advocate for user-centred and data-driven approaches.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <v-container fluid style="background: #fff8ef">
      <v-container>
        <h2 class="beb">Sample projects</h2>
        <v-row class="my-10">
          <v-chip-group v-model="skills" column multiple>
            <v-chip filter label value="cyber"> cyber security </v-chip>
            <v-chip filter label value="design"> design </v-chip>
            <v-chip filter label value="data"> data science </v-chip>
            <v-chip filter label value="pm"> program management </v-chip>
            <v-chip filter label value="swe"> software engineering </v-chip>
            <v-chip filter label value="writing"> technical writing </v-chip>
            <v-chip filter label value="privacy"> privacy </v-chip>
          </v-chip-group>
        </v-row>
        <v-row>
          <v-col
            v-for="(item, index) in projects"
            :key="index"
            sm="4"
            lg="4"
            xl="4"
            class="d-flex child-flex"
          >
            <v-card
              justify="center"
              v-bind:style="{
                transform: 'rotate(' + getRandomArbitrary(-4, 4) + 'deg)',
              }"
            >
              <v-responsive :aspect-ratio="0.83">
                <v-img
                  :src="getImgUrl(item.img)"
                  class="mx-5 mt-5"
                  aspect-ratio="1"
                ></v-img>
                <v-card-title class="text-center justify-center">{{
                  item.title
                }}</v-card-title>
                <v-card-subtitle class="text-center">{{
                  item.text
                }}</v-card-subtitle>
              </v-responsive>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <v-container>
      <v-container text-center>
        <v-btn
          class="ma-1"
          color="primary"
          plain
          v-for="(item, index) in socials"
          :key="index"
          :href="item.link"
        >
          {{ item.name }}
        </v-btn>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    skills: [],
    socials: [
      {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/chris-chow/",
      },
      {
        id: 2,
        name: "GitHub",
        link: "https://github.com/chikean",
      },
      {
        id: 3,
        name: "Google Scholar",
        link: "https://scholar.google.com/citations?hl=en&user=TNhT7zkAAAAJ",
      },
    ],
    all_projects: [
      {
        id: 1,
        title: "Inferring Implicit Relevance from Physiological Signals",
        text: "PhD thesis",
        img: "phd",
        categories: ["design", "data", "privacy", "pm", "swe", "writing"],
      },
      {
        id: 2,
        title: "Phishing Tacklebox",
        text: "Outlook add-in web app",
        img: "tacklebox",
        categories: ["design", "privacy", "cyber", "swe", "pm", "writing"],
      },
      {
        id: 3,
        title: "Hall of Phame",
        text: "Phishing awareness program",
        img: "hall-of-phame",
        categories: [
          "design",
          "data",
          "privacy",
          "pm",
          "swe",
          "writing",
          "cyber",
        ],
      },
      {
        id: 4,
        title: "Tail-gator",
        text: "Physical security poster campaign",
        img: "tailgator",
        categories: ["design", "pm"],
      },
      {
        id: 5,
        title: "IRAP training materials",
        text: "Australian Government policy",
        img: "irap",
        categories: ["writing", "cyber"],
      },
      {
        id: 6,
        title: "HCC Workshop",
        text: "Interactive outreach web app",
        img: "hcc-workshop",
        categories: ["design", "pm", "swe", "privacy"],
      },
      {
        id: 7,
        title: "Australasian Computer Science Week - ACSW 2016",
        text: "Conference program",
        img: "acsw",
        categories: ["design", "swe", "writing"],
      },
    ],
  }),
  methods: {
    getRandomArbitrary: function (min, max) {
      return Math.random() * (max - min) + min;
    },
    getImgUrl: function (pic) {
      return require("@/assets/" + pic + ".png");
    },
  },
  computed: {
    projects: function () {
      if (this.skills.length) {
        let searchValue = this.skills;
        return this.all_projects.filter(function (project) {
          return searchValue.some((r) => project.categories.includes(r));
        });
      } else {
        return this.all_projects;
      }
    },
  },
};
</script>

<style>
.v-card__title {
  word-break: normal !important;
}

.v-image__image {
  border: 0.5px solid grey;
}
</style>