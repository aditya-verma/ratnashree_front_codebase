<template>
  <q-page>
    <Header class="bg-grey-11"></Header>
    <q-card flat class="vertical-middle q-ma-lg bg-grey-11">
      <q-card-section>
        <div class="text-h5 text-weight-bold text-center">
          Login <span class="text-body1">or</span> Signup
        </div>
      </q-card-section>

      <q-card-actions vertical>
        <q-input
          v-model="textField.value"
          square
          outlined
          dense
          type="tel"
          style="font-size: 1.7em"
          hint="Mobile Number*"
        >
          <template v-slot:prepend>
            <span class="text-normal">+91 |</span>
          </template>
        </q-input>
        <q-btn
          color="pink"
          stretch
          class="q-mt-lg"
          to="/authentication/verify-otp/"
          >Continue</q-btn
        >
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "LoginPage",
  components: {
    Header: () => import("src/components/Header.vue")
  },
  data() {
    return {
      textField: {
        value: ""
      }
    };
  }
};
</script>

<style></style>
