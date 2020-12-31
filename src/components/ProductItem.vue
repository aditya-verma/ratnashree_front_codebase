<template>
  <q-card
    flat
    bordered
    square
    class="cursor-pointer"
    @click="goToProductPage(item)"
    style="height: auto; width: calc(50%); margin: 0; padding: 0;"
  >
    <q-img v-ripple style="height: auto; width: 100%;" :src="item.src">
      <template v-slot:loading>
        <div class="text-primary">
          <q-spinner-ios />
        </div>
      </template>
      <template v-slot:error>
        <div class="absolute-full flex flex-center text-primary">
          Cannot load image
        </div>
      </template>
    </q-img>
    <q-card-section style="margin: 0; padding: 0">
      <div class="q-pl-sm q-pt-sm">
        <div
          class="text-weight-medium"
          style="width:calc(100% - 30px) !important; max-height: 40px; overflow: hidden;"
        >
          {{ item.title }}
        </div>
        <div class="text-weight-light">₹{{ item.price }}</div>
      </div>
      <div class="absolute-top-right q-mr-xs q-mt-xs">
        <q-icon size="30px" name="o_favorite" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "ProductItemComponent",
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    goToProductPage(item) {
      this.$router.push({
        path: "product",
        query: { product: item }
      });
    }
  }
};
</script>

<style></style>
