<template>
  <div
    class="flex"
    :style="{ 'flex-direction' : 'column' }"
  >
    <div
      v-if="runDataActiveRun"
      class="game"
      :style="{ 'font-size' : fontsize}"
    >
      {{ runDataActiveRun.game }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { RunDataActiveRun } from '../../../../../nodecg-speedcontrol/types';

@Component
export default class Game extends Vue {
  @State runDataActiveRun!: RunDataActiveRun;

  @Prop({ type: String, default: '3.5em' })
  fontsize: string;
}
</script>

<style scoped>
    .game {
        font-size: 3.5em;
        text-align: center;
        margin: auto 0;
    }
</style>
