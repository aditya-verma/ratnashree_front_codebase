<template>
  <q-item class="bg-white q-mt-sm">
    <div style="width: 100%">
      <div class="q-mb-sm" style="display: inline-flex; align-items:center;">
        <div class="q-mr-sm">
          <q-avatar size="120px" square>
            <img
              src="https://staticimg.titan.co.in/Tanishq/Catalog/502995PTLAAA02_1.jpg?impolicy=pqmedlo" alt="image"
            />
          </q-avatar>
        </div>

        <div class="q-mr-sm">
          <div class="text-bold">
            {{ "CHARMING DIAMOND PENDANT IN WHITE AND ROSE GOLD" }}
          </div>
          <div>
            <q-btn-dropdown
              outline
              :label="'Size: ' + size"
              dense
              unelevated
              fab-mini
              padding="0"
              class="q-pl-sm q-mr-sm"
              no-caps
            >
              <q-list>
                <q-item clickable v-close-popup @click="quantity = 1">
                  <q-item-section>
                    <q-item-label>1</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="quantity = 2">
                  <q-item-section>
                    <q-item-label>2</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="quantity = 3">
                  <q-item-section>
                    <q-item-label>3</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown
              outline
              :label="'Quantity: ' + quantity"
              dense
              unelevated
              fab-mini
              padding="0"
              class="q-pl-sm"
              no-caps
            >
              <q-list>
                <q-item clickable v-close-popup @click="quantity = 1">
                  <q-item-section>
                    <q-item-label>1</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="quantity = 2">
                  <q-item-section>
                    <q-item-label>2</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="quantity = 3">
                  <q-item-section>
                    <q-item-label>3</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div>Price INR 15000</div>
          <div>Delivery by 8 Jan 2021</div>
          <div class="text-positive">{{ "In stock" }}</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr;">
        <div class="q-mr-sm">
          <q-btn stretch style="width: 100%" dense outline color="pink">
            Remove
          </q-btn>
        </div>
        <div class="q-ml-sm">
          <q-btn stretch style="width: 100%" dense outline color="pink">
            Move to wishlist
          </q-btn>
        </div>
      </div>
    </div>
  </q-item>
</template>

<script>
export default {
  name: "CartItem",
  data() {
    return {
      quantity: 1,
      size: 1
    };
  }
};
</script>

<style></style>
