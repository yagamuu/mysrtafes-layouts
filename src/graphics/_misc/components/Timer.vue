<template>
  <div
    class="flex"
    :style="{ 'flex-direction' : 'column' }"
  >
    <div class="timerText">
      <span :class="timer.state">{{ timer.time }}</span>
    </div>
    <div
      v-if="runDataActiveRun"
      class="estText"
    >
      <span>予定タイム {{ runDataActiveRun.estimate }}</span>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint global-require: off */
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { Timer as TimerType, RunDataActiveRun } from '../../../../../nodecg-speedcontrol/types';

@Component
export default class Timer extends Vue {
  @State timer!: TimerType;
  @State runDataActiveRun!: RunDataActiveRun;
}
</script>

<style scoped>
    .timerText {
        font-size: 8.0em;
        text-align: center;
    }

    .estText {
        font-size: 3em;
        text-align: center;
    }

    .stopped {
        color: #9a9fa1;
    }
    .running {
       color: #ffffff;
    }
    .paused {
        color: #dfb54f;
    }
    .finished {
        color: #ffff52;
    }
</style>
