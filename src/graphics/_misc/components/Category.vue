<template>
  <div
    class="flex"
    :style="{ 'flex-direction' : 'column' }"
  >
    <div
      v-if="runDataActiveRun"
      class="category"
    >
      {{ runDataActiveRun.category }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { RunDataActiveRun } from '../../../../../nodecg-speedcontrol/types';

@Component
export default class Category extends Vue {
  @State runDataActiveRun!: RunDataActiveRun;
}
</script>

<style scoped>
    .category {
        margin-top: 10px;
        font-size: 2.5em;
        text-align: center;
        margin: auto 0;
    }
</style>
