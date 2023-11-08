<template>
  <section class="d-flex flex-column align-center justify-start">
    <h1 class="mb-2">Taha Bahadır Durmuş</h1>
    <div class="d-flex" style="gap: 10px">
      <h1>Find out everything you here on my personal docs</h1>
      <a
        href="https://www.tbdr.xyz/docs/category/explore-taha-swiftly"
        target="_blank"
      >
        <h1>here</h1>
      </a>
    </div>
    <navigation-section
      :current-state="currentState"
      @click-action="clickAction"
    ></navigation-section>
  </section>
</template>

<script setup lang="ts">
import AboutSection from "@/components/Home/AboutSection.vue";
import NavigationSection from "@/components/Home/NavigationSection.vue";
import { computed } from "vue";

const emit = defineEmits(["clickAction"]);
const clickAction = (clickedOn: string) => {
  emit("clickAction", clickedOn);
};
const props = defineProps({
  currentState: String,
});
const currentState = computed(() => props.currentState);
</script>

<style scoped lang="scss">
section {
  .avatar {
    width: 250px;
    height: 250px;
    img {
      object-fit: contain;
      width: 100%;
    }
  }
}
</style>
