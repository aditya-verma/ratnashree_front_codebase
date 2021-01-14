<template>
  <q-page>
    <Header></Header>
    <q-list v-show="!loading">
      <q-item class="q-pl-xl q-pr-xl q-mb-xs">
        <q-avatar style="margin:auto;" size="150px" rounded>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </q-item>
      <q-item class="q-pl-xl q-pr-xl q-mb-md">
        <q-item-section>
          <q-input outlined v-model="user.mobile_no" label="Mobile Number">
          </q-input>
        </q-item-section>
      </q-item>
      <q-item class="q-pl-xl q-pr-xl q-mb-md">
        <q-item-section>
          <q-input outlined v-model="getFullName" label="Full Name"></q-input>
        </q-item-section>
      </q-item>
      <q-item class="q-pl-xl q-pr-xl q-mb-md">
        <q-item-section>
          <q-input outlined v-model="user.email" label="Email"></q-input>
        </q-item-section>
      </q-item>
      <q-item class="q-pl-xl q-pr-xl q-mb-md">
        <q-item-section>
          <q-input outlined v-model="getGender" label="Gender"></q-input>
        </q-item-section>
      </q-item>
      <q-item class="q-pl-xl q-pr-xl q-mb-md">
        <q-item-section @click="triggerOpen">
          <q-field
            @focus="triggerOpen"
            outlined
            v-model="user.date_of_birth"
            label="Birthday"
          >
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ user.date_of_birth }}
              </div>
            </template>
            <template v-slot:append>
              <q-btn v-show="false" ref="openPopup" color="primary">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date
                    v-model="user.date_of_birth"
                    :landscape="$q.screen.gt.xs"
                    :mask="datePicker.format"
                    class="fixed-center"
                    @input="triggerClose"
                  >
                    <q-btn
                      v-show="false"
                      name="closePopup"
                      ref="closePopup"
                      v-close-popup
                    />
                  </q-date>
                </q-popup-proxy>
              </q-btn>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
      <q-item class="q-pl-xl q-pr-xl" style="padding-bottom: 80px">
        <q-btn style="width: 100%" stretch outline>
          CHANGE PASSWORD
          <q-popup-proxy
            @before-hide="setChangePasswordValueToInitial"
            transition-show="slide-up"
            transition-hide="slide-down"
          >
            <div
              class="bg-white absolute-bottom"
              style="width: 100%; margin: auto"
            >
              <q-item class="q-pl-xl q-pr-xl q-mb-md">
                <q-item-section>
                  <q-input
                    type="password"
                    :error="changePassword.old_error"
                    :error-message="changePassword.error_message"
                    @focus="changePassword.old_error = false"
                    outlined
                    dense
                    v-model="changePassword.old"
                    label="Old Password"
                    @keyup.enter="$refs.input2.$el.focus()"
                  ></q-input>
                </q-item-section>
              </q-item>
              <q-item class="q-pl-xl q-pr-xl q-mb-md">
                <q-item-section>
                  <q-input
                    type="password"
                    outlined
                    ref="input2"
                    :error="changePassword.new_error"
                    :error-message="changePassword.error_message"
                    @focus="changePassword.new_error = false"
                    @keyup.enter="$refs.input3.$el.focus()"
                    dense
                    v-model="changePassword.new"
                    label="New Password"
                  ></q-input>
                </q-item-section>
              </q-item>
              <q-item class="q-pl-xl q-pr-xl q-mb-md">
                <q-item-section>
                  <q-input
                    type="password"
                    outlined
                    dense
                    :error="changePassword.confirm_error"
                    :error-message="changePassword.error_message"
                    ref="input3"
                    @keyup.enter="updatePassword"
                    @focus="changePassword.confirm_error = false"
                    v-model="changePassword.confirm"
                    label="Confirm Password"
                  ></q-input>
                </q-item-section>
              </q-item>
              <q-item>
                <q-btn
                  style="width: 100%"
                  stretch
                  outline
                  @click="updatePassword"
                >
                  SAVE
                </q-btn>
              </q-item>
            </div>
            <q-btn
              v-show="false"
              name="closePasswordPopup"
              ref="closePasswordPopup"
              v-close-popup
            />
          </q-popup-proxy>
        </q-btn>
      </q-item>
      <q-item
        class="bg-grey-11 fixed-bottom q-pl-xl q-pr-xl q-pt-md q-pb-md"
        style="border-top: 1px solid grey;"
      >
        <q-btn color="pink" stretch style="width: 100%" @click="updateProfile">
          SAVE DETAILS
        </q-btn>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import CONST from "src/const.js";
export default {
  name: "EditProfilePage",
  components: {
    Header: () => import("src/components/Header.vue")
  },
  data() {
    return {
      user: "",
      datePicker: {
        format: "YYYY-MM-DD"
      },
      loading: true,
      changePassword: {
        old: "",
        old_error: false,
        new: "",
        new_error: false,
        confirm: "",
        confirm_error: false,
        error_message: ""
      }
    };
  },

  methods: {
    triggerOpen() {
      this.$refs.openPopup.$el.click();
    },
    triggerClose() {
      this.$refs.closePopup.$el.click();
    },
    updateProfile() {
      const referenceOfThis = this;
      fetch("/api/v1/me/edit_profile/", {
        method: "PATCH",
        credentials: "include",
        body: JSON.stringify(this.user),
        headers: {
          "content-type": "application/json",
          "X-CSRFToken": referenceOfThis.$q.cookies.get("csrftoken")
        }
      })
        .then(response => {
          if (response.status == 200) {
            return response.json();
          } else if (response.status == 403) {
            referenceOfThis.$router.replace({
              path: "/authentication/login/",
              query: {
                redirect: referenceOfThis.$route.path
              }
            });
          } else {
            referenceOfThis.$q.notify({
              icon: "network_check",
              message: response.status,
              caption: response.statusText,
              color: "primary"
            });
          }
        })
        .then(data => {
          referenceOfThis.user = data.data;
        })
        .catch(error => {
          console.error("Error:", error);
        });
    },
    setChangePasswordValueToInitial() {
      this.changePassword.old = "";
      this.changePassword.old_error = false;
      (this.changePassword.new = ""), (this.changePassword.new_error = false);
      this.changePassword.confirm = "";
      this.changePassword.confirm_error = false;
    },
    updatePassword() {
      const referenceOfThis = this;
      const body_data = {
        old_password: this.changePassword.old,
        new_password: this.changePassword.new,
        confirm_password: this.changePassword.confirm
      };
      fetch("/api/v1/me/update_password/", {
        method: "PATCH",
        credentials: "include",
        body: JSON.stringify(body_data),
        headers: {
          "content-type": "application/json",
          "X-CSRFToken": referenceOfThis.$q.cookies.get("csrftoken")
        }
      })
        .then(response => {
          if (response.status == 200) {
            referenceOfThis.$refs.closePasswordPopup.$el.click();
            return response.json();
          } else if (response.status == 403) {
            referenceOfThis.$router.replace({
              path: "/authentication/login/",
              query: {
                redirect: referenceOfThis.$route.path
              }
            });
          } else if (response.status == 400) {
            return response.json();
          } else {
            referenceOfThis.$q.notify({
              icon: "network_check",
              message: response.status,
              caption: response.statusText,
              color: "primary"
            });
          }
        })
        .then(response => {
          console.log(response);
          if (response.detail) {
            referenceOfThis.$q.notify({
              icon: "cancel",
              caption: "Password Change Failed",
              color: "negative",
              timeout: 1500,
              progress: true
            });
            if (response.detail.old_password) {
              referenceOfThis.changePassword.old_error = true;
              referenceOfThis.changePassword.error_message =
                response.detail.old_password;
            }
          } else if (response.data) {
            referenceOfThis.$q.notify({
              icon: "check_circle",
              caption: response.data,
              color: "positive",
              timeout: 1500,
              progress: true
            });
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  },
  computed: {
    getFullName() {
      return (
        this.user.first_name +
        " " +
        this.user.middle_name +
        " " +
        this.user.last_name
      );
    },
    getGender() {
      return CONST.GENDER[this.user.gender];
    }
  },
  watch: {
    "changePassword.new": function(newValue, oldValue) {
      if (this.changePassword.old == newValue) {
        this.changePassword.old_error = true;
        this.changePassword.new_error = true;
        this.changePassword.error_message =
          "old password cannot be same as new password";
      } else {
        this.changePassword.old_error = false;
        this.changePassword.new_error = false;
      }
    },
    "changePassword.confirm": function(newValue, oldValue) {
      if (this.changePassword.new != newValue) {
        this.changePassword.confirm_error = true;
        this.changePassword.error_message =
          "Confirm password must be same as the new password";
      } else {
        this.changePassword.confirm_error = false;
      }
    }
  },
  beforeCreate() {
    const referenceOfThis = this;
    fetch("/api/v1/me/read_profile/")
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else if (response.status == 403) {
          referenceOfThis.$router.replace({
            path: "/authentication/login/",
            query: {
              redirect: referenceOfThis.$route.path
            }
          });
        } else {
          referenceOfThis.$q.notify({
            icon: "network_check",
            message: response.status,
            caption: response.statusText,
            color: "primary"
          });
        }
        return response.json();
      })
      .then(data => {
        referenceOfThis.user = data.data;
        this.loading = false;
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
};
</script>

<style></style>
