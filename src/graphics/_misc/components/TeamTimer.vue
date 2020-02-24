<template>
  <div
    class="flex"
    :style="{ 'flex-direction' : 'column' }"
  >
    <div class="timerText">
      <span
        :style="{ 'font-size' : fontsize }"
      >{{ finishTime }}</span>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint global-require: off */
import {
  Vue, Component, Prop,
} from 'vue-property-decorator';
import { State } from 'vuex-class';
import { Timer as TimerType, RunDataActiveRun } from '../../../../../nodecg-speedcontrol/types';

@Component
export default class Teamtimer extends Vue {
  @State timer!: TimerType;
  @State runDataActiveRun!: RunDataActiveRun;

  @Prop({ type: String, required: true })
  teamid!: string;

  @Prop({ type: String, default: '1.4em' })
  fontsize!: string;

  get finishTime(): string | undefined {
    if (!this.runDataActiveRun || this.runDataActiveRun.teams.length <= 1) {
      return undefined;
    }
    const teamFinishTime = this.timer.teamFinishTimes[this.runDataActiveRun.teams[this.teamid].id];
    if (teamFinishTime) {
      if (teamFinishTime.state === 'completed') {
        return this.timer.teamFinishTimes[this.runDataActiveRun.teams[this.teamid].id].time;
      }
      if (teamFinishTime.state === 'forfeit') {
        return 'リタイア';
      }
    }
    return undefined;
  }
}
</script>

<style scoped>
    .timerText {
        text-align: left;
        color: #000000;
    }
</style>
