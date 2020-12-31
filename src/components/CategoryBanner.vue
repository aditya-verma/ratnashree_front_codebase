<template>
  <q-expansion-item
    dense-toggle
    switch-toggle-side
    expand-separator
    label="Account settings"
    caption="This is a caption"
    :header-style="{
      height: '140px',
      width: '100%',
      marginBottom: '2px'
    }"
  >
    <template v-slot:header>
      <q-img class="absolute-full" :src="category.image" style="height: 100%">
        <div class="bg-transparent" style="transform: translate(0%, 50%);">
          <div class="text-weight-bold">
            {{ category.title }}
          </div>
          <div>{{ category.description }}</div>
        </div>
      </q-img>
    </template>
    <q-card>
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius
        reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum
        officiis modi facere maiores architecto suscipit iste eveniet doloribus
        ullam aliquid.
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script>
export default {
  name: "CategoryBannerComponent",
  data() {
    return {
      expanded: false
    };
  },
  props: {
    category: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
