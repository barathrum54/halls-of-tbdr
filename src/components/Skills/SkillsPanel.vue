<template>
  <section class="d-flex flex-column align-center justify-start">
    <SkillsInfo />
    <SkillsSearchBar @search-skill="searchAction" />
    <navigation-section
      :current-state="currentState"
      @click-action="clickAction"
    ></navigation-section>
  </section>
</template>

<script setup lang="ts">
import NavigationSection from "@/components/Home/NavigationSection.vue";
import SkillsSearchBar from "./SkillsSearchBar.vue";
import SkillsInfo from "./SkillsInfo.vue";
import { computed } from "vue";
const emit = defineEmits(["clickAction", "searchAction"]);
const currentState = computed(() => props.currentState);
const props = defineProps({
  currentState: String,
});
const clickAction = (clickedOn: string) => {
  emit("clickAction", clickedOn);
};
const searchAction = (text: string) => {
  console.log(text);
  emit("searchAction", text);
};
// Create an instance of the SkillsController when the component is mounted
</script>

<style scoped lang="scss">
section {
  width: 100%;
}
</style>
