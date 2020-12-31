<template>
  <q-page>
    <Header />
    <div>
      <q-list>
        <q-separator />
        <q-item class="bg-white">
          <Stepper :step="step" />
        </q-item>
        <q-item class="bg-white q-mb-sm q-mt-sm">
          <q-item-section>
            <q-item-label>
              Deliver to:
              <span class="text-bold">{{
                "Aditya Vikram Verma" + ", " + "211003"
              }}</span>
            </q-item-label>
            <q-item-label lines="1" class="text-caption">
              {{
                "163/122A, Attarsuiya, Prayagraj , Uttar Pradesh, India - 211003"
              }}
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label caption class="text-positive">
              CHANGE
            </q-item-label>
          </q-item-section>
        </q-item>
        <CartItem />
        <CartItem />

        <q-item class="bg-white q-mt-sm q-mb-sm">
          <q-item-section>
            <q-item-label class="text-bold">
              PRICE DETAILS ({{ cartDetails.totalItems + " Items" }})
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
                  Store Private Limited for providing access to, and on account
                  of your usage of www.ratnashree.com, Ratna Shree m-site and
                  Ratna Shree Mobile App
                </q-tooltip>
              </q-icon>
              <span class="float-right">
                INR {{ cartDetails.platformServiceCharge }}
              </span>
            </q-item-label>
            <q-item-label class="text-bold">
              Total Amount
              <span class="float-right">INR {{ totalAmount }}</span>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-mb-sm" style="height: 110px">
          <figure style="text-align:center; margin:auto auto;">
            <img
              src="~assets/original.svg"
              alt="genuine"
              style="max-height: 50px"
            />
            <figcaption>100% Genuine products</figcaption>
          </figure>

          <figure style="text-align:center; margin:auto auto;">
            <img
              src="~assets/shield.svg"
              alt="Contactless Delivery"
              style="max-height: 50px"
            />
            <figcaption>Contactless Delivery</figcaption>
          </figure>
          <figure style="text-align:center; margin:auto auto">
            <img
              src="~assets/protected.svg"
              alt="genuine"
              style="max-height: 50px"
            />
            <figcaption>Secured Payments</figcaption>
          </figure>
        </q-item>
      </q-list>
    </div>
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
        to="/checkout/address/"
      >
        PLACE ORDER
      </q-btn>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  name: "CartPage",
  components: {
    CartItem: () => import("components/CartItem.vue"),
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
      step: 1,
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
    title: "SHOPING BAG"
  }
};
</script>

<style>
.q-stepper__content {
  display: none;
}
</style>
