<template>
  <v-app>
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultView from "./View.vue";
</script>
<style lang="scss">
@font-face {
  font-family: "Roboto"; // Replace with the desired font name
  src: url("./fonts/Roboto-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

$font-family: "Roboto";

* {
  [class*="text-"] {
    color: #36405a;
    font-family: $font-family, sans-serif !important;
  }

  font-family: $font-family, sans-serif !important;
}
</style>
