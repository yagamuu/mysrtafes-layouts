<template>
  <div
    class="flex"
    :style="{ 'flex-direction' : 'column' }"
  >
    <div
      v-if="runDataActiveRun"
      class="commentatorName"
      :style="{ 'font-size' : fontsize }"
    >
      {{ runDataActiveRun.customData.commentator }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { RunDataActiveRun } from '../../../../../nodecg-speedcontrol/types';

@Component
export default class Commentator extends Vue {
  @State runDataActiveRun!: RunDataActiveRun;

  @Prop({ type: String, default: '4.0em' })
  fontsize!: string;

  @Prop({ type: Number, default: 0 })
  teamid!: number;
}
</script>

<style scoped>
    .commentatorName {
      text-align: center;
      margin: auto 0;
      color: #000000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

    }
</style>
