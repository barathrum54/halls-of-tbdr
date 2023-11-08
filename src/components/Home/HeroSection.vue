<template>
  <div class="hero-section">
    <v-avatar
      image="@/assets/Images/tbdr.jpg"
      size="140"
      class="elevation-24 mb-5"
    />
    <h1 v-typewriter="3000">Taha Bahadır Durmuş</h1>
    <h2 v-typewriter="2500">Software Developer</h2>
    <h3 v-typewriter="2000" style="text-align: center" class="mt-3">
      AD VICTORIAM PER SUDOREM
    </h3>
    <h3 v-typewriter="2000" style="text-align: center" class="">
      LACRIMAS ET LABOREM
    </h3>
    <navigation-section @click-action="clickAction"></navigation-section>
    <h5></h5>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAppState } from "@/store/state";
import NavigationSection from "./NavigationSection.vue";

const stateStore = useAppState();
const emit = defineEmits(["clickAction"]);
const clickAction = (clickedOn: string) => {
  emit("clickAction", clickedOn);
};
const currentState = ref(stateStore.getCurrentState() || "");
</script>

<style scoped lang="scss">
.hero-section {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
