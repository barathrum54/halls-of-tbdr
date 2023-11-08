<template>
  <div id="container" ref="container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ThreeController from "./ThreeController";
import { characterPos } from "@/constants/MovementKeys";
import { watch, computed } from "vue";

const container = ref<HTMLElement | null>(null);
const currentCharacterPos = ref(0);

let threeController: ThreeController | null = null;
const props = defineProps<{
  state: string;
  skillSearchQuery: string;
  currentState: string;
}>();

// Define a computed property to react to changes in the "state" prop
const state = computed(() => props.state);
const skillSearchQuery = computed(() => props.skillSearchQuery);
const emit = defineEmits(["changeCurrentCard"]);
onMounted(() => {
  if (container.value) {
    threeController = new ThreeController(
      container.value,
      currentCharacterPos,
      characterPos
    );
    threeController.startScene();
  }
});
const searchSkill = (skillName: string) => {
  threeController?.searchSkills(skillName);
};

// Use the "watch" function to call changeCharacterPos when "state" changes
watch(state, (newState,oldState) => {
  changeCharacterPos(newState, oldState);
});
watch(skillSearchQuery, (skillQuery) => {
  searchSkill(skillQuery);
});
const changeCharacterPos = (pos: string, oldPos:string) => {
  threeController?.changeCharacterPos(pos, oldPos).then((res) => {
    console.log(res);
    emit("changeCurrentCard", res);
  });
};
</script>

<style lang="scss">
#container {
  position: absolute;
}
</style>
