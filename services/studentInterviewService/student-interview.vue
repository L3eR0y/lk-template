<template lang="pug">
.student-interview__wrapper
  div HELLO
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class StudentInterviewServiceClass extends Vue {
  message = "Hello from StudentInterviewServiceClass";
}
</script>

<style lang="scss" scoped>
.student-interview {
  &__wrapper {
    display: flex;
    height: 100%;
    width: 100%;
    padding: 20px;
    background-color: aqua;
    justify-content: center;
    align-items: center;
  }
}
</style>
