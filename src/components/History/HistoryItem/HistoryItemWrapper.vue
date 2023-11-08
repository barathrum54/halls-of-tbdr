<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  overflow-x: hidden;
  background-size: 100%;
  background-position: center;
  margin-bottom: 10px;
  border-bottom: 1pt solid rgba($color: #000000, $alpha: 0.2);
}
</style>
