<template>
  <q-page>
    <Header />

    <q-infinite-scroll
      class="row items-start"
      style="padding: 0px; width: 100%"
      @load="onLoad"
      :offset="250"
    >
      <CategorieBanner
        v-for="(category, index) in categories"
        :key="index"
        :category="category"
        style="width: 100%"
      />

      <template v-slot:loading style="width: 100%">
        <div class="row text-center justify-center q-my-md" style="width: 100%">
          <q-spinner-ios color="primary" size="40px" />
          <div class="text-weight-light text-center">
            <br />
            <q-icon name="legend_toggle" />
            <br />
            "Elegant styling is very important. It is life enhancing and, like
            everything that gives pleasure, it is worth doing well."
            <br />
            <div class="text-weight-thin text-captions">
              <i>Vivienne Westwood</i>
            </div>
          </div>
        </div>
      </template>
    </q-infinite-scroll>
  </q-page>
</template>

<script>
const CATEGORIES = [
  {
    title: "Mountains",
    description: "Mountains are trains with high altitude.",
    image: "https://cdn.quasar.dev/img/mountains.jpg"
  },
  {
    title: "Bridges",
    description:
      "Bridges are architectures which help in crossing the rivers or water bodies through foot.",
    image: "https://cdn.quasar.dev/img/parallax2.jpg"
  }
];
export default {
  name: "CategoriesPage",
  components: {
    CategorieBanner: () => import("src/components/CategoryBanner.vue"),
    Header: () => import("src/components/Header.vue")
  },
  data() {
    return {
      categories: CATEGORIES
    };
  },
  methods: {
    onLoad(index, done) {
      setTimeout(() => {
        if (this.categories) {
          this.categories.push(
            {
              title: "Mountains",
              description: "Mountains are trains with high altitude.",
              image: "https://cdn.quasar.dev/img/mountains.jpg"
            },
            {
              title: "Bridges",
              description:
                "Bridges are architectures which help in crossing the rivers or water bodies through foot.",
              image: "https://cdn.quasar.dev/img/parallax2.jpg"
            }
          );
          done();
        }
      }, 2000);
    }
  },
  meta: {
    title: "Categories"
  }
};
</script>
