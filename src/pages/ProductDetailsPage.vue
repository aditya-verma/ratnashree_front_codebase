<template>
  <q-page>
    <q-header class="bg-white fixed-top">
      <q-toolbar class="text-primary">
        <q-toolbar-title>
          <!-- <router-link> -->
          <q-btn
            dense
            flat
            round
            icon="r_keyboard_backspace"
            @click="$router.go(-1)"
          ></q-btn>
          <!-- </router-link> -->
        </q-toolbar-title>
        <q-btn dense flat round icon="r_share"></q-btn>
        <q-btn dense flat round icon="r_favorite_border"></q-btn>
        <q-btn dense flat round icon="o_shopping_bag" to="/cart">
          <q-badge transparent color="primary" text-color="white" floating
            >1</q-badge
          >
        </q-btn>
      </q-toolbar>
    </q-header>
    <div style="height: 60%">
      <q-carousel
        swipeable
        animated
        arrows
        navigation
        control-color="primary"
        control-text-color="primary"
        transition-prev="slide-right"
        transition-next="slide-left"
        v-model="carousel.slide"
        max-height="600px"
        infinite
      >
        <q-carousel-slide :name="1" :img-src="this.productData.src" />

        <q-carousel-slide
          :name="2"
          img-src="https://staticimg.titan.co.in/Tanishq/Catalog/501204PACAAAP5_1.jpg?impolicy=pqmedlow"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://staticimg.titan.co.in/Tanishq/Catalog/501204PAFAAAP5_1.jpg?impolicy=pqmedlow"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://staticimg.titan.co.in/Tanishq/Catalog/501204PABAAAP5_1.jpg?impolicy=pqmedlo"
        />
      </q-carousel>
    </div>
    <div>
      <q-list>
        <q-separator />
        <q-item class="bg-white q-mb-sm">
          <q-item-section>
            <q-item-label>{{ productData.title }}</q-item-label>
            <q-item-label caption> INR {{ productData.price }} </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label
              caption
              :class="
                this.productData.stock === 0 ? 'text-negative' : 'text-positive'
              "
            >
              {{
                this.productData.stock === 0
                  ? "Out of Stock"
                  : this.productData.stock >= 10
                  ? "In Stock"
                  : "Few left!"
              }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="bg-white q-mb-sm">
          <q-item-section>
            <q-item-label>Product Details</q-item-label>
            <q-item-label caption class="q-mb-sm">
              This unique pendant has a floral design and consists of concentric
              diamonds in the inner floral structure.
            </q-item-label>
            <q-item-label>Material Details</q-item-label>
            <q-item-label caption class="q-mb-sm">
              GOLD PURITY: 18K <br />
              GOLD WEIGHT: 5.50 grams <br />
              DIAMOND CUT: Brilliant Round <br />
              DIAMOND CLARITY: BW1 <br />
              GROSS DIAMOND WEIGHT: 0.91 Carats <br />
              DIAMOND PIECES: 12
            </q-item-label>
            <q-item-label>Size and Fit</q-item-label>
            <q-item-label caption>
              RING SIZE: 15
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="bg-white q-mb-sm">
          <q-item-section>
            <q-item-label>Delivery and Services for</q-item-label>
            <div class="bordered" style="width: 100%">
              <q-field outlined dense>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">
                    211003
                  </div>
                </template>

                <template v-slot:append>
                  <q-btn flat color="primary">Change</q-btn>
                </template>
              </q-field>
            </div>
            <q-item-label caption class="text-positive">
              Delivery available
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="bg-white q-mb-sm">
          <q-item-section>
            <q-item-label>Returns and Exchanges</q-item-label>
            <q-item-label caption>
              Returns and exchanges not available on this item(s).
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-footer reveal>
      <q-tabs
        align="justify"
        :breakpoint="0"
        inline-label
        class="bg-white text-weight-medium text-dark shadow-1"
        style="font-size: 10px !important"
        active-color="primary"
      >
        <q-tab name="home" icon="o_favorite">
          <label> Wishlist </label>
        </q-tab>
        <q-tab name="categories" icon="o_shopping_bag" to="/categories">
          <label>Add to bag</label>
        </q-tab>
      </q-tabs>
    </q-footer>
  </q-page>
</template>

<script>
const DEFAULT = {
  src:
    "https://staticimg.titan.co.in/Tanishq/Catalog/502995PTLAAA02_1.jpg?impolicy=pqmedlo",
  title: "CHARMING DIAMOND PENDANT IN WHITE AND ROSE GOLD",
  price: 20000,
  stock: 0
};
export default {
  name: "ProductPage",
  props: {
    product: {
      type: Object,
      required: false,
      default: () => {
        return DEFAULT;
      }
    }
  },
  data() {
    return {
      productData: this.product,
      carousel: {
        slide: 1,
        fullscreen: false
      }
    };
  },
  created() {
    if (
      this.product === DEFAULT &&
      this.$route.query.product !== "[object Object]"
    ) {
      this.productData = this.$route.query.product;
    }
  },
  meta: {}
};
</script>

<style></style>
