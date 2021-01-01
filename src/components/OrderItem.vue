<template>
  <q-item class="bg-white q-mb-sm">
    <q-list style="width: 100%">
      <q-item style="width: 100%; padding: 0; margin: 0;">
        <q-item-section avatar>
          <q-icon
            :color="status === 'Cancelled' ? 'grey' : 'primary'"
            :name="status === 'Cancelled' ? 'o_cancel' : 'fas fa-box'"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="status === 'Cancelled' ? 'text-grey' : 'text-primary'"
          >
            {{ status }}
          </q-item-label>
          <q-item-label caption>
            {{ "Delivery by 10 Jan 2020" }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item style="padding: 0; margin: 0">
        <div style="width: 100%">
          <div
            class="q-mb-sm"
            style="display: inline-flex; align-items:center;"
          >
            <div class="q-mr-sm">
              <q-avatar size="120px" square>
                <img
                  src="https://staticimg.titan.co.in/Tanishq/Catalog/502995PTLAAA02_1.jpg?impolicy=pqmedlo"
                  alt="image"
                  :class="status === 'Cancelled' ? 'greyscale-image' : ''"
                />
              </q-avatar>
            </div>

            <div class="q-mr-sm">
              <div :class="status === 'Cancelled' ? 'text-grey' : ''">
                {{ "CHARMING DIAMOND PENDANT IN WHITE AND ROSE GOLD" }}
              </div>
            </div>
          </div>

          <div
            v-if="status === 'Completed' || status === 'Payment Failed'"
            style="display: grid; grid-template-columns: 1fr;"
          >
            <q-btn outline color="pink">Details</q-btn>
          </div>

          <div
            v-else-if="status !== 'Cancelled'"
            style="display: grid; grid-template-columns: 1fr 1fr;"
          >
            <div class="q-mr-sm">
              <q-btn stretch style="width: 100%" dense outline color="pink">
                Cancle
              </q-btn>
            </div>
            <div class="q-ml-sm">
              <q-btn stretch style="width: 100%" dense outline color="pink">
                Track
              </q-btn>
            </div>
          </div>
        </div>
      </q-item>
    </q-list>
  </q-item>
</template>

<script>
export default {
  name: "OrderItemComponent",
  props: {
    status: {
      type: String,
      default: "Confirmation Pending"
    }
  }
};
</script>

<style>
.greyscale-image {
  opacity: 0.4;
  filter: alpha(opacity=40);
}
</style>
