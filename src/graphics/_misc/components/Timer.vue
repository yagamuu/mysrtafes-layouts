<template>
  <div
    class="flex"
    :style="{ 'flex-direction' : 'column' }"
  >
    <div class="timerText">
      <span
        :class="timer.state"
        :style="{ 'font-size' : fontsize }"
      >{{ timer.time }}</span>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint global-require: off */
import { Vue, Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { Timer as TimerType, RunDataActiveRun } from '../../../../../nodecg-speedcontrol/types';

@Component
export default class Timer extends Vue {
  @State timer!: TimerType;
  @State runDataActiveRun!: RunDataActiveRun;

  @Prop({ type: String, default: '5.0em' })
  fontsize!: string;
}
</script>

<style scoped>
    .timerText {
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
