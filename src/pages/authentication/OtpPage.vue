<template>
  <q-page class="bg-white">
    <Header></Header>

    <q-item class="q-ml-xl">
      <q-img
        style="width: 100px; height: 100px"
        alt="authenticate otp"
        src="~assets/otp.jpeg"
        sizes=""
      />
    </q-item>
    <q-item class="q-ml-xl" style="padding-left: 25px">
      <q-item-section>
        <q-item-label class="text-h6 text-bold">
          Verify with OTP
        </q-item-label>
        <q-item-label caption> Sent to {{ "8765170501" }} </q-item-label>
      </q-item-section>
    </q-item>
    <q-item class="q-ml-xl q-mt-lg">
      <div style="display: flex; flex-direction: row;">
        <OtpInput
          ref="otpInput"
          input-classes="otp-input"
          separator=""
          :num-inputs="4"
          :should-auto-focus="true"
          :is-input-num="true"
          @on-change="handleOnChange"
          @on-complete="handleOnComplete"
        />
      </div>
    </q-item>
    <q-item class="q-ml-xl" style="padding-left: 20px">
      <q-btn dense flat label="Resend OTP" color="pink" />
    </q-item>

    <q-item class="q-ml-xl" style="padding-left: 25px">
      Log in using &nbsp; <span class="text-pink text-bold"> Password </span>
    </q-item>

    <q-item class="q-ml-xl" style="padding-left: 25px">
      Having trouble logging in? &nbsp;
      <span class="text-pink text-bold"> Get help </span>
    </q-item>
  </q-page>
</template>

<script>
import OtpInput from "@bachdgvn/vue-otp-input";

export default {
  name: "OtpPage",
  components: {
    OtpInput: OtpInput,
    Header: () => import("src/components/Header.vue")
  },
  methods: {
    handleOnComplete(value) {
      console.log("OTP completed: ", value);
    },
    handleOnChange(value) {
      console.log("OTP changed: ", value);
    }
  },
  data() {
    return {
      otp: {
        value: ""
      }
    };
  }
};
</script>

<style lang="scss">
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  &.error {
    border: 1px solid red !important;
  }
}
.otp-input::-webkit-inner-adjust-hue-button,
.otp-input::-webkit-outer-adjust-hue-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
