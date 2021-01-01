<template>
  <q-page>
    <Header />
    <q-list>
      <q-item class="bg-white q-mt-xs q-mb-sm">
        <q-item-section>
          <q-item-label>
            Showing <span class="text-bold"> {{ "All Orders" }} </span>
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn dense outline>
            <q-icon name="r_tune" />
            Filter
          </q-btn>
        </q-item-section>
      </q-item>
      <OrderItem />
      <OrderItem status="Cancelled" />
      <OrderItem status="Completed" />

      <q-item style="display: grid; grid-template-columns: 1fr;"
        ><q-btn dense color="pink">Show older orders</q-btn></q-item
      >
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: "OrdersPage",
  components: {
    Header: () => import("src/components/Header.vue"),
    OrderItem: () => import("src/components/OrderItem.vue")
  },
  meta: {
    title: "ORDERS"
  }
};
</script>

<style></style>
