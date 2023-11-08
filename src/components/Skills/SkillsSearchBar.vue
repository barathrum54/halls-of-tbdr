<template>
  <div class="search-bar-wrapper">
    <v-text-field
      v-model="searchQuery"
      label="Search and you shall find"
      outlined
      clearable
      @keyup.esc="clearSearch"
      @keyup="searchAction"
      ref="searchInput"
      @click:clear="clearSearch"
      focused
      id="searchbar"
      autocomplete="off"
    ></v-text-field>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import debounce from "lodash/debounce"; // Import debounce from lodash

const searchQuery = ref("");
const searchInput = ref(null);
const emit = defineEmits(["searchSkill"]);
const clearSearch = () => {
  console.log("clear Search");
  searchQuery.value = "";
  searchAction();
};
const debouncedSearchAction = debounce((query: string) => {
  emit("searchSkill", query);
}, 300);

const searchAction = () => {
  debouncedSearchAction(searchQuery.value);
};
</script>
<style lang="scss" scoped>
.search-bar-wrapper {
  width: 100%;
  #searchbar {
    width: 100%;
  }
  .foundSkill {
    text-align: center;
  }
}
</style>
