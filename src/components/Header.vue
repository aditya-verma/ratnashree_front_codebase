<template>
  <q-header class="bg-white">
    <q-toolbar class="text-primary">
      <q-btn
        v-if="heading() == 'Ratna Shree Store'"
        flat
        dense
        round
        icon="r_menu"
        aria-label="Menu"
        @click="emitLeftDrawerOpen()"
      />
      <q-btn
        v-if="!isHeadingPage()"
        dense
        flat
        round
        icon="r_keyboard_backspace"
        @click="$router.go(-1)"
        style="font-size: 1em !important;"
      ></q-btn>

      <q-toolbar-title v-if="isHeadingPage()">
        {{ heading() }}
      </q-toolbar-title>

      <q-toolbar-title v-else style="font-size: 1em !important;">
        {{ heading() }}
      </q-toolbar-title>

      <q-btn v-if="isHomePage()" dense flat round icon="r_search" />

      <q-btn v-if="isHomePage()" dense flat round icon="notifications_none" />

      <q-btn
        v-if="isHomePage() || isCategoriesPage()"
        dense
        flat
        round
        icon="r_favorite_border"
      ></q-btn>

      <q-btn
        v-if="isHomePage() || isCategoriesPage()"
        dense
        flat
        round
        icon="o_shopping_bag"
        to="/checkout/cart"
      >
        <q-badge transparent color="primary" text-color="white" floating
          >1</q-badge
        >
      </q-btn>

      <q-btn v-if="isStudioPage()" dense flat round icon="o_bookmarks" />
      <q-btn v-if="isStudioPage()" dense flat round icon="o_settings" />
      <q-btn v-if="isStudioPage()" dense flat round icon="o_search" />

      <q-btn v-if="isCartPage()" dense outline>WISHLIST</q-btn>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods: {
    emitLeftDrawerOpen: function() {
      this.$emit("toggleLeftDrawerOpen", 1);
    },
    heading() {
      var route_label = this.$route.path;
      if (route_label == "/" || route_label == "/home") {
        var heading_label = "Ratna Shree Store";
      } else if (route_label.startsWith("/checkout/cart")) {
        heading_label = "SHOPPING BAG";
      } else if (route_label.startsWith("/checkout/address")) {
        heading_label = "ADDRESS";
      } else if (route_label.startsWith("/categories")) {
        heading_label = "Categories";
      } else if (route_label.startsWith("/profile")) {
        heading_label = "Profile";
      } else if (route_label.startsWith("/studio")) {
        heading_label = "Studio";
      }
      return heading_label;
    },
    isHeadingPage() {
      const headingPages = [
        "Ratna Shree Store",
        "Categories",
        "Profile",
        "Studio"
      ];
      return headingPages.includes(this.heading());
    },
    isHomePage() {
      if (this.heading() == "Ratna Shree Store") return true;
    },
    isCategoriesPage() {
      if (this.heading() == "Categories") return true;
    },
    isCartPage() {
      if (this.heading() == "SHOPPING BAG") return true;
    },
    isStudioPage() {
      if (this.heading() == "Studio") return true;
    }
  }
};
</script>

<style></style>
