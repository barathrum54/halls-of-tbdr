<template>
  <section class="d-flex flex-column align-center justify-start">
    <v-avatar class="avatar mb-5">
      <img src="@/assets/Images/tbdr.jpg" alt="alt" />
    </v-avatar>
    <h1 class="mb-2">Taha Bahadır Durmuş</h1>
    <h2 class="mb-2">Software Developer</h2>
    <about-section></about-section>
    <navigation-section @click-action="clickAction"></navigation-section>
  </section>
</template>

<script setup lang="ts">
import AboutSection from "@/components/Home/AboutSection.vue";
import NavigationSection from "@/components/Home/NavigationSection.vue";

const emit = defineEmits(["clickAction"]);
const clickAction = (clickedOn: string) => {
  emit("clickAction", clickedOn);
};
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
