<template>
  <q-page>
    <Header></Header>
    <q-list>
      <q-item class="bg-white q-mb-sm">
        <q-img
          src="https://staticimg.titan.co.in/Tanishq/Catalog/502995PTLAAA02_1.jpg?impolicy=pqmedlo"
          alt="image"
        >
        </q-img>
      </q-item>

      <q-item class="bg-white q-mb-sm" style="height: 50px;">
        <q-list>{{ "status" }}</q-list>
      </q-item>

      <q-item class="bg-white q-mb-sm">
        <div style="flex: 1 1 auto; margin-right: 1px;">
          <q-btn
            dense
            outline
            color="pink"
            stretch
            style="width: 100%"
            label="Cancel"
          />
        </div>
        <div style="flex: 1 1 auto; margin-left: 1px;">
          <q-btn
            dense
            outline
            stretch
            color="pink"
            style="width: 100%;"
            label="Track"
          />
        </div>
      </q-item>

      <q-item class="bg-white q-mb-sm">
        <q-item-section>
          <q-item-label class="text-body1 text-bold q-mb-sm">
            Delivery Address
          </q-item-label>
          <q-item-label class="text-bold">
            {{ "Aditya Vikram Verma" }}
            <span class="text-weight-thin">|</span>
            {{ "8765170501" }}
          </q-item-label>
          <q-item-label>
            {{ "163/122A, Attarsuiya, Prayagraj - 211003" }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="bg-white q-mb-sm">
        <q-item-section>
          <q-item-label>
            <span class="text-bold">Total Item Price</span>
            <span class="float-right">INR{{ "15150" }}</span>
          </q-item-label>

          <q-item-label>
            You saved INR151.5 on this order
            <span class="float-right">
              <q-btn dense size="10px" flat color="pink" label="View Breakup" />
            </span>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="bg-white q-mb-lg">
        <q-item-section>
          <q-item-label class="text-body1 text-bold q-mb-sm">
            Updates Sent to
          </q-item-label>
          <q-item-label>
            <q-icon name="call" title="8765170501" /> {{ "8765170501" }}
          </q-item-label>
          <q-item-label>
            <q-icon name="mail" /> {{ "aditya.v.verma@gmail.com" }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: "OrderItemDetailsPage",
  components: {
    Header: () => import("src/components/Header.vue")
  },
  meta: {
    title: "Item Details"
  }
};
</script>

<style></style>
