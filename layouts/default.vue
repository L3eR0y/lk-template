<template lang="pug">
.default-layout-wrapper
  .default-layout-wrapper__header
    h1 Header
  .default-layout-wrapper__body
    .default-layout-wrapper__body-menu
      cmp-button
      div(
        v-for="(cmp, index) in service_components" :key="index"
        @click="onComponentClick(cmp)"
      ) {{ cmp }}
    .default-layout-wrapper__body-content
      Nuxt
  .default-layout-wrapper__footer
    h1 Footer
</template>

<script>
// import Vue from "vue";
// import Component from "vue-class-component";

export default {
  data() {
    return {
      service_components: [],
      selected_component: null,
    };
  },
  methods: {
    onComponentClick(cmp) {
      this.selected_component = cmp;
    },
  },
  computed: {},
  created() {
    console.log("Created", this);
    Object.keys(this.constructor?.options?.components || {}).reduce(
      (acc, key) => {
        if (
          (key.includes("Srvs") || key.includes("Cmp")) &&
          !key.includes("Lazy")
        ) {
          acc.push(
            key
              .split(/(?=[A-Z])/)
              .join("-")
              .toLocaleLowerCase()
          );
        }
        return acc;
      },
      this.service_components
    );
  },
};
</script>

<style lang="scss" scoped>
.default-layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__header {
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
  }

  &__body {
    display: flex;
    flex: 1;
    background-color: lightgray;

    &-menu {
      display: flex;
      flex-direction: column;
      width: 20%;
      height: 100%;
      background-color: lightgreen;
    }

    &-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      height: 100%;
      background-color: lightcyan;
    }
  }

  &__footer {
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
  }
}
</style>
