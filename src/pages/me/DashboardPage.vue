<template>
  <q-page>
    <Header />

    <q-img src="~src/assets/drawer_profile_cover.jpg" style="height: 150px">
      <div class="absolute-bottom bg-transparent">
        <q-avatar rounded size="56px" class="q-mb-sm">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="avatar" />
        </q-avatar>
        <div class="text-weight-bold">
          Aditya Vikram Verma
        </div>
        <div>@aditya-verma</div>
      </div>
    </q-img>

    <q-space style="height:20px" />

    <q-list padding class="bg-white">
      <q-item
        clickable
        v-ripple
        v-for="item in menu_list_1"
        :key="item.name"
        :to="item.to"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">{{ item.title }}</q-item-label>
          <q-item-label caption>{{ item.description }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="keyboard_arrow_right" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-space style="height:20px" />

    <q-list padding class="bg-white">
      <q-item
        clickable
        v-ripple
        v-for="item in menu_list_2"
        :key="item.name"
        :to="item.to"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">{{ item.title }}</q-item-label>
          <q-item-label caption>{{ item.description }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="keyboard_arrow_right" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-space style="height:20px" />

    <q-list padding class="bg-white">
      <q-item
        clickable
        v-ripple
        v-for="item in menu_list_3"
        :key="item.name"
        :to="item.to"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">{{ item.title }}</q-item-label>
          <q-item-label caption>{{ item.description }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="keyboard_arrow_right" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-space style="height:20px" />

    <q-list padding class="text-weight-medium text-caption bg-white">
      <q-item
        clickable
        v-ripple
        v-for="item in menu_list_4"
        :key="item.name"
        :to="item.to"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>

        <q-item-section style="opacity: 0.6;" class="text-uppercase">
          <q-item-label lines="1">{{ item.title }}</q-item-label>
          <q-item-label caption>{{ item.description }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <div
      class="q-mb-sm"
      style="height: 60px;
             display: flex;
             justify-content: center;
             padding-top: 12px;
             padding-bottom: 12px"
    >
      <q-btn
        elevated
        outline
        size="md"
        color="negative"
        class="text-weight-bold"
      >
        Log out
      </q-btn>
    </div>
    <div
      class="text-center text-weight-light text-caption q-mb-xl q-mt-lg"
      style="height: 50px"
    >
      <q-badge outline align="middle" color="primary">
        App Version v{{ $PACKAGE_VERSION || "0" }}
      </q-badge>
    </div>
  </q-page>
</template>

<script>
const PROFILE_MENU_SECTION_1 = [
  {
    title: "Wishlist",
    description: "Your most loved jewells",
    icon: "o_favorite",
    to: ""
  },
  {
    title: "Orders",
    description: "Check your order status",
    icon: "o_assignment_turned_in",
    to: "/orders/"
  },
  {
    title: "Help Center",
    description: "Help regarding your recent purchases",
    icon: "r_support_agent",
    to: ""
  }
];

const PROFILE_MENU_SECTION_2 = [
  {
    title: "Saved Cards",
    description: "Save your cards for faster checkouts",
    icon: "o_credit_card",
    to: ""
  },
  {
    title: "Address",
    description: "Save addresses for hassle-free checkouts",
    icon: "o_edit_location_alt",
    to: ""
  },
  {
    title: "Referrals",
    description: "Manage your referrals",
    icon: "o_loyalty",
    to: ""
  }
];

const PROFILE_MENU_SECTION_3 = [
  {
    title: "Profile Details",
    description: "Change your profile details & password",
    icon: "o_description",
    to: "/me/profile/edit/"
  },
  {
    title: "Settings",
    description: "Manage notification & app settings",
    icon: "o_settings",
    to: ""
  }
];

const ABOUT_TERMS_POLICY = [
  { title: "FAQs", icon: "", to: "" },
  { title: "About Us", icon: "", to: "" },
  { title: "Terms Of Use", icon: "", to: "" },
  { title: "Privacy Policy", icon: "", to: "" }
];

export default {
  name: "Dashboard",
  components: {
    Header: () => import("src/components/Header.vue")
  },
  data() {
    return {
      menu_list_1: PROFILE_MENU_SECTION_1,
      menu_list_2: PROFILE_MENU_SECTION_2,
      menu_list_3: PROFILE_MENU_SECTION_3,
      menu_list_4: ABOUT_TERMS_POLICY,
      version: this.version
    };
  },
  meta: {
    title: "Profile"
  }
};
</script>

<style lang="scss"></style>
