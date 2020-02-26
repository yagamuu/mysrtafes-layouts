<template>
  <div
    class="flex"
    :style="{ 'flex-direction' : 'column' }"
  >
    <div
      v-if="runDataActiveRun"
      class="estimate"
    >
      {{ runDataActiveRun.estimate }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { RunDataActiveRun } from '../../../../../nodecg-speedcontrol/types';

@Component
export default class Estimate extends Vue {
  @State runDataActiveRun!: RunDataActiveRun;
}
</script>

<style scoped>
    .estimate {
        font-size: 1.5em;
        text-align: center;
        margin: auto 0;
        color: #000000;
    }
</style>
