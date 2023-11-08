<template>
  <div class="scroll">
    <div class="scroll-top"></div>
    <!-- Add transition element with a name -->
    <div class="scroll-body px-10">
      <slot></slot>
    </div>
    <div class="scroll-bottom"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.scroll {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 99;
  width: 1000px;
  height: 800px;
  overflow: hidden;
  &.skills {
    margin-top: -100px;
    height: 500px;
    max-width: 750px;
  }
  &.history {
    height: 900px;
    margin-top: -100px;
    .scroll-body {
      width: 100%;
    }
    .scroll-top {
      min-width: 90%;
    }
  }
  .scroll-body {
    position: absolute;
    content: "";
    width: inherit;
    height: 100%;
    max-width: fit-content;
    z-index: 1 !important;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden !important;
    white-space: nowrap;
  }

  .scroll-top {
    content: "";
    min-width: 60%;
    height: 120%;
    z-index: 1 !important;
    background: url("scroll.png") 0% 50% no-repeat;
    background-size: cover;
  }
  .scroll-bottom {
    content: "";
    min-width: 15%;
    height: 120%;
    z-index: -2 !important;
    background: url("scroll.png") 0% 50% no-repeat;
    background-size: cover;
  }
  .scroll-bottom {
    transform: scaleX(-100%);
    z-index: 1;
    margin-left: -10px;
  }
}
</style>
