<template>
  <div class="ui-panel-wrap">
    <div class="content-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.ui-panel-wrap {
  width: 50%;
  height: 650px;
  position: relative;
  background-color: rgb(248, 236, 213);
  border-radius: 15px;
  -webkit-box-shadow: 10px 10px 32px 4px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 10px 32px 4px rgba(0, 0, 0, 1);
  box-shadow: 10px 10px 32px 4px rgba(0, 0, 0, 1);

  .content-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    z-index: 1 !important;
  }
}
</style>
