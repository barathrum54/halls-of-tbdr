<template>
  <div class="navigation-panel mt-5">
    <v-btn
      v-if="currentState != 'history'"
      @click="emit('clickAction', 'history')"
      color=""
      ripple
      >History</v-btn
    >
    <v-btn
      v-if="currentState != 'faq'"
      @click="emit('clickAction', 'faq')"
      color=""
      ripple
      >FAQ</v-btn
    >
    <v-btn
      v-if="currentState != 'skills'"
      @click="emit('clickAction', 'skills')"
      color=""
      ripple
      >Skills</v-btn
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const emit = defineEmits(["clickAction"]);
const currentState = computed(() => props.currentState);
const props = defineProps({
  currentState: String,
});
</script>

<style scoped lang="scss">
.navigation-panel {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
