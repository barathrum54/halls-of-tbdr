<template>
  <v-app>
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultView from "./View.vue";
</script>
<style lang="scss">
$font-family: "Roboto";

* {
  [class*="text-"] {
    color: #36405a;
    font-family: $font-family, sans-serif !important;
  }

  font-family: $font-family, sans-serif !important;
}
</style>
