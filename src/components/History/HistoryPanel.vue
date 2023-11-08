<template>
  <v-container class="section" grid-list-xs>
    <div class="history-wrapper">
      <div class="history-top-bar">
        <h1>HISTORY</h1>
        <h3>FAMES NUNQUAM MORITUR</h3>
      </div>
      <div class="history-content">
        <history-item-wrapper v-for="item in historyItems" :key="item.title">
          <history-item :item="item"></history-item>
        </history-item-wrapper>
      </div>
      <navigation-section
        :current-state="currentState"
        @click-action="clickAction"
      ></navigation-section>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import NavigationSection from "@/components/Home/NavigationSection.vue";
import { useAppState } from "@/store/state";
import { ref } from "vue";
import HistoryItem from "./HistoryItem/HistoryItem.vue";
import HistoryItemWrapper from "./HistoryItem/HistoryItemWrapper.vue";
import { historyItems } from "@/constants/HistoryItems";
const emit = defineEmits(["clickAction"]);
const clickAction = (clickedOn: string) => {
  emit("clickAction", clickedOn);
};

const useStateStore = useAppState();
const currentState = ref(useStateStore.getCurrentState());
</script>

<style scoped lang="scss">
.section {
  .history-wrapper {
    width: 100%;
    display: flex;
    flex-flow: column;
    padding: 10px 20px;

    .history-top-bar {
      width: 100%;
      margin-bottom: 10px;
      text-align: center;
    }
    .history-content {
      overflow-y: scroll;
      height: 470px;
      &::-webkit-scrollbar {
        width: 5px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: rgba($color: #000000, $alpha: 0.1);
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #888;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
  }
}
</style>
