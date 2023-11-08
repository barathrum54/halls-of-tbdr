<template>
  <div>
    <ThreeRenderer
      :skillSearchQuery="skillSearchQuery"
      @change-current-card="changeCurrentCard"
      @found-skill-change="foundSkillChange"
      :state="state"
      :currentState="threeCurrentCard"
    />
    <v-container class="d-flex pt-15 justify-center">
      <Transition name="scroll">
        <ScrollCard v-if="currentCard == 'hero'">
          <HeroSection
            :current-state="threeCurrentCard"
            @click-action="changeTreeState"
          ></HeroSection>
        </ScrollCard>
      </Transition>
      <Transition name="drop">
        <SignCard class="history" v-if="currentCard == 'history'">
          <HistoryPanel
            :current-state="threeCurrentCard"
            @click-action="changeTreeState"
          />
        </SignCard>
      </Transition>
      <Transition name="drop">
        <SignCard class="faq" v-if="currentCard == 'faq'">
          <FaqPanel
            :current-state="threeCurrentCard"
            @click-action="changeTreeState"
          />
        </SignCard>
      </Transition>
      <Transition name="scroll">
        <ScrollCard class="skills" v-if="currentCard == 'skills'">
          <SkillsPanel
            :current-state="threeCurrentCard"
            @search-action="skillSearchAction"
            @click-action="changeTreeState"
          />
        </ScrollCard>
      </Transition>
      <Transition name="drop">
        <SignCard class="contact" v-if="currentCard == 'contact'">
          <ContactPanel
            :current-state="threeCurrentCard"
            @click-action="changeTreeState"
          />
        </SignCard>
      </Transition>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import HeroSection from "@/components/Home/HeroSection.vue";
import ThreeRenderer from "@/components/Three/ThreeRenderer.vue";
import { ref } from "vue";
import HistoryPanel from "@/components/History/HistoryPanel.vue";
import FaqPanel from "@/components/Faq/FaqPanel.vue";
import SkillsPanel from "@/components/Skills/SkillsPanel.vue";
import ContactPanel from "@/components/Contact/ContactPanel.vue";
import { onMounted } from "vue";
import { computed } from "vue";
import ScrollCard from "@/components/Common/ScrollCard.vue";
import SignCard from "@/components/Common/SignCard.vue";

const currentCard: any = ref("");
const threeCurrentCard = computed(() => currentCard.value);
const threeState = ref("");
const state = computed(() => {
  console.log(threeState.value);
  return threeState.value;
});
const changeTreeState = (card: string) => {
  currentCard.value = "";
  threeState.value = card;
};
const changeCurrentCard = (card: string) => {
  currentCard.value = card;
};
const foundSkillChange = (newString: string) => {
  console.log("foundSkillChange", { newString });
};
const threeSkillSearchQuery = ref("");
const skillSearchQuery = computed(() => threeSkillSearchQuery.value);
const skillSearchAction = (text: string) => {
  threeSkillSearchQuery.value = text;
};
onMounted(() => {
  setTimeout(() => {
    threeState.value = "hero";
  }, 3000);
});
</script>
<style lang="scss" scoped>
.home-card {
  position: absolute;
  border-radius: 10px;
  background-color: rgba($color: #fff, $alpha: 0.5);

  z-index: 2;
  padding: 30px;
  width: fit-content;
}
.drop-enter-active,
.drop-leave-active {
  transition: all 0.5s ease-in-out;
}
.drop-leave-to,
.drop-enter-from {
  transform: translateY(-50%);
  opacity: 0;
}
.scroll-enter-active,
.scroll-leave-active {
  transition: all 1s ease-in-out;
}
.scroll-leave-to,
.scroll-enter-from {
  opacity: 0;
  width: 0px;
}
</style>
