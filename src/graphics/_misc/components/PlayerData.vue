<template>
  <div
    class="flex"
    :style="{ 'flex-direction' : 'column' }"
  >
    <div
      v-if="runDataActiveRun"
      class="playerName"
    >
      走者:{{ runDataActiveRun.teams[0].players[0].name }}
    </div>
    <div
      v-if="runDataActiveRun.teams[0].players[0].social.twitch"
      class="playerTwitch"
    >
      Twitch:{{ runDataActiveRun.teams[0].players[0].social.twitch }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { RunDataActiveRun } from '../../../../../nodecg-speedcontrol/types';

@Component
export default class Playerdata extends Vue {
  @State runDataActiveRun!: RunDataActiveRun;
}
</script>

<style scoped>
    .playerName {
        font-size: 2em;
        text-align: center;
        margin: auto 0;
    }

    .playerTwitch {
        margin-top: 10px;
        text-align: center;
        font-size: 2.0em;
        margin: auto 0;
    }
</style>
