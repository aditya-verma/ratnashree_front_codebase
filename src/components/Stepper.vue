<template>
  <div
    style="display: flex; justify-content: space-between; width: 100%; font-size: 0.8em"
  >
    <div style="width: 30%" class="text-positive">
      <hr :color="step >= 1 ? '#21ba45' : 'grey'" style="width: 100%;" />
    </div>
    <div style="width: 50px">
      <figure
        :class="step > 1 ? 'text-positive' : ''"
        style="text-align:center; margin:auto auto"
      >
        <q-icon
          :name="
            step > 1
              ? 'check_circle_outline'
              : step === 1
              ? 'adjust'
              : 'radio_button_unchecked'
          "
        />
        <figcaption>Bag</figcaption>
      </figure>
    </div>
    <div style="width: 30%">
      <hr :color="step >= 2 ? '#21ba45' : 'grey'" style="width: 100%" />
    </div>
    <div style="width: 50px">
      <figure
        :class="step > 2 ? 'text-positive' : ''"
        style="text-align:center; margin:auto auto"
      >
        <q-icon
          :name="
            step > 2
              ? 'check_circle_outline'
              : step === 2
              ? 'adjust'
              : 'radio_button_unchecked'
          "
        />
        <figcaption>Address</figcaption>
      </figure>
    </div>
    <div style="width: 30%">
      <hr :color="step >= 3 ? '#21ba45' : 'grey'" style="width: 100%" />
    </div>
    <div style="width: 50px">
      <figure
        :class="step >= 3 ? 'text-positive' : ''"
        style="text-align:center; margin:auto auto"
      >
        <q-icon
          :name="
            step > 3
              ? 'check_circle_outline'
              : step === 3
              ? 'adjust'
              : 'radio_button_unchecked'
          "
        />
        <figcaption>Payment</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style></style>
