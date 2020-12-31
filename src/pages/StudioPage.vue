<template>
  <q-page>
    <Header />
  </q-page>
</template>

<script>
export default {
  name: "StudioPage",
  data() {
    return {};
  },
  components: {
    Header: () => import("src/components/Header.vue")
  },
  meta: {
    title: "Studio"
  }
};
</script>
