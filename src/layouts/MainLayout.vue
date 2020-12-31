<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="bg-grey-11">
      <router-view />
    </q-page-container>

    <q-footer>
      <q-tabs
        v-model="tab"
        align="justify"
        :breakpoint="0"
        dense
        class="bg-white text-weight-medium text-dark shadow-1"
        style="font-size: 10px !important"
        active-color="primary"
      >
        <q-route-tab name="home" :icon="homeTabIcon()" to="/">
          <label> Home </label>
        </q-route-tab>

        <q-route-tab
          hidden
          name="categories"
          :icon="categoriesTabIcon()"
          to="/categories/"
        >
          <label>Categories</label>
          <q-badge color="primary" text-color="white" floating>10+</q-badge>
        </q-route-tab>

        <q-route-tab
          :alert="alertStudio"
          name="studio"
          icon="r_tv"
          to="/studio/"
        >
          <label>studio</label>
        </q-route-tab>
        <q-route-tab
          :alert="alertProfile"
          name="profile"
          :icon="profileTabIcon()"
          to="/profile/"
        >
          <label>Profile</label>
        </q-route-tab>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  computed: {
    alertProfile() {
      return this.tab === "profile" ? false : "primary";
    },
    alertStudio() {
      return this.tab === "studio" ? false : "primary";
    }
  },
  methods: {
    homeTabIcon() {
      return this.tab === "home" ? "r_home" : "o_home";
    },
    categoriesTabIcon() {
      return this.tab === "categories" ? "r_widgets" : "o_widgets";
    },
    profileTabIcon() {
      return this.tab === "profile" ? "r_person" : "o_person";
    }
  },
  data() {
    return {
      tab: "home"
    };
  }
};
</script>
