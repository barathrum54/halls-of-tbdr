<template>
  <div class="history-item">
    <v-row>
      <v-col cols="6" class="company">
        <div class="top">
          <div class="company-logo">
            <img :src="'/CompanyLogos/' + item.company.icon" alt="" />
          </div>
          <div class="title">
            {{ item.title }}
          </div>
          <div class="stack">
            <v-chip-group>
              <v-chip v-for="stack in item.stack" :key="stack">
                {{ stack }}
              </v-chip>
            </v-chip-group>
          </div>
        </div>
        <div class="bottom">
          <div class="dates">
            <div class="date">
              {{ item.dateStart }}
            </div>
            -
            <div class="date">
              {{ item.dateEnd }}
            </div>
          </div>
          <div class="company-name">
            <a :href="item.company.website" target="_blank">
              {{ item.company.website }}</a
            >
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="description">
          <ul>
            <li v-for="dI in item.description" :key="dI">
              {{ dI }}
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { HistoryItem } from "@/types/History";
const props = defineProps<{
  item: HistoryItem;
}>();
</script>

<style scoped lang="scss">
.history-item {
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 100%;
  padding-bottom: 10px;
  overflow: hidden;

  .company {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    .top {
      width: 100%;
      .company-logo {
        background-color: rgb(206, 206, 206);
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        img {
          object-fit: contain;
          width: 50%;
        }
      }
      .title {
        font-size: 1.5rem;
        font-weight: bolder;
      }
    }
    .bottom {
      .dates {
        display: flex;
        justify-self: flex-end;
        gap: 10px;
        font-size: 1rem;
        font-weight: 500;
        opacity: 0.8;
      }
      .company-name {
        margin-top: 5px;
        width: fit-content;
        padding: 5px;
        border-radius: 5px;
        box-sizing: border-box;
        border: 1pt solid rgba($color: #000000, $alpha: 0.1);

        position: relative; /* Needed for positioning the pseudo-element */

        &:hover {
          border: 1pt solid black;
        }

        a {
          text-decoration: none;
          color: black;
          font-style: none;
          opacity: 0.9;
          font-weight: 600;
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border: 1pt solid rgba($color: #000000, $alpha: 0.1);
          border-radius: 5px;
          box-sizing: border-box;

          z-index: -1;
          transition: border-color 0.3s ease; /* Add transition for smooth effect */
        }

        &:hover::before {
          border-color: black;
        }
      }
    }
  }

  .description {
    height: 100%;
    ul {
      li {
        line-height: 20px;
        font-size: 1rem;
        width: 90%;
        padding-top: 10px;
      }
    }
  }
}
</style>
