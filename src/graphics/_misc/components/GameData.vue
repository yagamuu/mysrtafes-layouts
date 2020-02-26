<template>
  <div
    class="flex"
    :style="{ 'flex-direction' : 'column' }"
  >
    <div
      v-if="runDataActiveRun"
      class="gameTitle"
      :style="{ 'font-size' : gameFontsize}"
    >
      {{ runDataActiveRun.game }}
    </div>
    <div
      v-if="runDataActiveRun"
      class="subInfo"
      :style="{ 'font-size' : categoryFontsize}"
    >
      {{ runDataActiveRun.category }} | {{ runDataActiveRun.system }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { RunDataActiveRun } from '../../../../../nodecg-speedcontrol/types';

@Component
export default class Gamedata extends Vue {
  @State runDataActiveRun!: RunDataActiveRun;

  @Prop({ type: String, default: '3em' })
  gameFontsize!: string;

  @Prop({ type: String, default: '2em' })
  categoryFontsize!: string;
}
</script>

<style scoped>
    .gameTitle {
        font-size: 3em;
        text-align: center;
        margin: auto 0;
        color: #000000;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .subInfo {
        font-size: 2em;
        text-align: center;
        margin: auto 0;
        color: #000000;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>
