<template>
  <q-page>
    <Header v-on:toggleLeftDrawerOpen="toggleLeftDrawerOpen()" />
    <q-drawer v-model="leftDrawerOpen" show-if-above :width="290">
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item clickable v-ripple to="/categories">
            <q-item-section avatar>
              <q-icon name="r_widgets" />
            </q-item-section>

            <q-item-section>
              Shop by Categories
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/wishlist">
            <q-item-section avatar>
              <q-icon name="r_favorite" />
            </q-item-section>

            <q-item-section>
              Wishlist
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/cart">
            <q-item-section avatar>
              <q-icon name="shopping_bag" />
            </q-item-section>

            <q-item-section>
              Cart
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/orders">
            <q-item-section avatar>
              <q-icon name="assignment_turned_in" />
            </q-item-section>

            <q-item-section>
              Orders
            </q-item-section>
          </q-item>
          <q-separator></q-separator>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="~src/assets\drawer_profile_cover.jpg"
        style="height: 150px"
        v-ripple
      >
        <div
          class="absolute-bottom bg-transparent"
          @click="$router.push('profile')"
        >
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="avatar"/>
          </q-avatar>
          <div class="text-weight-bold">
            Aditya Vikram Verma
          </div>
          <div class="text-captions text-weight-normal">
            +91 8765 170501
          </div>
        </div>
      </q-img>
    </q-drawer>
    <q-infinite-scroll
      class="row items-start"
      style="padding: 0; width: 100%"
      @load="onLoad"
      :offset="250"
    >
      <ProductItem v-for="(item, index) in items" :key="index" :item="item" />
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
const PRODUCTS = [
  {
    src:
      "https://staticimg.titan.co.in/Tanishq/Catalog/501204PACAAAP5_1.jpg?impolicy=pqmedlow",
    title: "18K GOLD Diamond and Emerald Pendent",
    price: 15000,
    stock: 0
  },
  {
    src:
      "https://staticimg.titan.co.in/Tanishq/Catalog/501204PAFAAAP5_1.jpg?impolicy=pqmedlow",
    title: "18K GOLD Diamond and Emerald Pendent",
    price: 12000,
    stock: 10
  },
  {
    src:
      "https://staticimg.titan.co.in/Tanishq/Catalog/501204PABAAAP5_1.jpg?impolicy=pqmedlo",
    title: "18K GOLD Diamond and Ruby Pendant",
    price: 16500,
    stock: 12
  },
  {
    src:
      "https://staticimg.titan.co.in/Tanishq/Catalog/512113PRPAAA00_1.jpg?impolicy=pqmedlow",
    title: "18K GOLD PENDANT",
    price: 11600,
    stock: 0
  },
  {
    src:
      "https://staticimg.titan.co.in/Tanishq/Catalog/502995PTLAAA02_1.jpg?impolicy=pqmedlo",
    title: "CHARMING DIAMOND PENDANT IN WHITE AND ROSE GOLD",
    price: 20000,
    stock: 1
  },
  {
    src:
      "https://staticimg.titan.co.in/Tanishq/Catalog/502995PTMAAA02_1.jpg?impolicy=pqmedlow",
    title: "DAZLING DIAMOND PENDANT IN WHITE AND ROSE GOLD",
    price: 21500,
    stock: 4
  }
];

export default {
  components: {
    ProductItem: () => import("src/components/ProductItem.vue"),
    Header: () => import("src/components/Header.vue")
  },
  name: "HomePage",
  data() {
    return {
      leftDrawerOpen: false,
      items: PRODUCTS
    };
  },
  methods: {
    onLoad(index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push(
            PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)],
            PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)],
            PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)],
            PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)]
          );
          done();
        }
      }, 2000);
    },
    toggleLeftDrawerOpen() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    }
  },
  meta: {
    title: "Online Shopping for Jewellery - Ratna Shree"
  }
};
</script>

<style>
.q-infinite-scroll__loading {
  width: 100% !important;
}
</style>
