<template lang="pug">
.default-layout-wrapper
  .default-layout-wrapper__header
    h1 Header
  .default-layout-wrapper__body
    .default-layout-wrapper__body-menu
    .default-layout-wrapper__body-content
  .default-layout-wrapper__footer
    h1 Footer
  //- <div class="default-layout-wrapper">
  //-   <div>1</div>
  //-   <div>2</div>
  //- </div>
</template>

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
