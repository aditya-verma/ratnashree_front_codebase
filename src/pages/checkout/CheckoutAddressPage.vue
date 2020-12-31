<template>
  <q-page>
    <Header />

    <q-list>
      <q-separator />
      <q-item class="bg-white">
        <Stepper :step="step" />
      </q-item>
      <q-item class="bg-white q-mt-sm">
        <q-item-section>
          <q-item-label class="q-mb-xs">
            <span class="text-bold">{{ "Aditya Vikram Verma" }}</span>
            <span class="text-caption"> (Default)</span>
          </q-item-label>
          <q-item-label>
            {{ "163/122A" }}
          </q-item-label>
          <q-item-label>
            {{ "Attarsuiya" }}
          </q-item-label>
          <q-item-label>
            {{ "Prayagraj" }}
          </q-item-label>
          <q-item-label>
            {{ "Uttar Pradesh - 211003" }}
          </q-item-label>
          <q-item-label class="q-mb-xs">
            {{ "India" }}
          </q-item-label>
          <q-item-label class="q-mb-xs">
            Mobile: <span class="text-bold">{{ "8765170501" }}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge outline color="positive" label="Office" />
        </q-item-section>
      </q-item>
      <q-item class="bg-white q-mb-sm">
        <q-btn outline class="full-width">CHANGE OR ADD ADDRESS</q-btn>
      </q-item>

      <q-item class="bg-white q-mt-sm q-mb-sm">
        <q-item-section>
          <q-item-label class="text-bold text-uppercase q-mb-xs">
            Delivery ESTIMATES
            <hr color="grey" size="1px" />
          </q-item-label>
          <q-item-label class="bg-white">
            Estimated date of delivery by
            <span class="text-bold">{{ "10 Jan 2020" }}</span>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="bg-white q-mt-sm q-mb-sm">
        <q-item-section>
          <q-item-label class="text-bold">
            PRICE DETAILS ({{ cartDetails.totalItems + " Items" }})
            <hr color="grey" size="1px" />
          </q-item-label>
          <q-item-label>
            Total MRP
            <span class="float-right"> INR {{ cartDetails.totalMRP }} </span>
          </q-item-label>
          <q-item-label>
            Discount on MRP
            <span class="float-right"> INR {{ cartDetails.discount }}</span>
          </q-item-label>
          <q-item-label>
            Platform Handling Charges
            <q-icon name="info_outline">
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                'Platform handling fee' is the charge levied by Ratna Shree
                Store Private Limited for providing access to, and on account of
                your usage of www.ratnashree.com, Ratna Shree m-site and Ratna
                Shree Mobile App
              </q-tooltip>
            </q-icon>
            <span class="float-right">
              INR {{ cartDetails.platformServiceCharge }}
            </span>
          </q-item-label>
          <q-item-label class="text-bold">
            <hr color="grey" size="1px" />
            Total Amount
            <span class="float-right">INR {{ totalAmount }}</span>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-footer reveal class="bg-white text-weight-medium text-dark shadow-1">
      <div
        style="height: 60px"
        class="q-pa-sm float-left"
        @click="viewDetails()"
      >
        <div class="q-pt-sm">
          {{ "Total Amount: INR " + totalAmount }}
        </div>
      </div>

      <q-btn
        style="height: 40px;"
        class="q-ma-sm absolute-right"
        color="primary"
        >CONTINUE</q-btn
      >
    </q-footer>
  </q-page>
</template>

<script>
export default {
  name: "CheckoutAddressPage",
  components: {
    Header: () => import("src/components/Header.vue"),
    Stepper: () => import("src/components/Stepper.vue")
  },
  computed: {
    totalAmount: function() {
      return (
        this.cartDetails.totalMRP +
        this.cartDetails.platformServiceCharge -
        this.cartDetails.discount
      );
    }
  },
  data() {
    return {
      step: 2,
      cartDetails: {
        totalItems: 2,
        totalMRP: 15000,
        discount: 0,
        platformServiceCharge: 150
      }
    };
  },
  methods: {
    viewDetails() {}
  },
  meta: {
    title: "ADDRESS"
  }
};
</script>

<style>
.q-stepper__content {
  display: none;
}
</style>
