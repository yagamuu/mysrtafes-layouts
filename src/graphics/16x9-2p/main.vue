<template>
  <div
    class="container"
    :style="{ 'background-image': `url(${background})`,
              'clip-path': `polygon(0px 0px, 20px 0px, 20px 20px, 20px 542px, 948px 542px, 948px 20px, 20px 20px, 20px 0px, 964px 0px, 964px 20px, 964px 542px, 1892px 542px, 1892px 20px, 964px 20px, 964px 0px, 1920px 0px, 1920px 1080px, 0px 1080px, 0px 0px)` }"
  >
    <Timer
      :style="{ 'left' : '1496px',
                'top' : '732px',
                'width' : '376px',
                'height' : '86px',
                'margin' : '10px'}"
      fontsize="4.5em"
    />
  </div>
</template>

<script lang="ts">
/* eslint global-require: off */
/* eslint max-len: off */
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import Timer from '../_misc/components/Timer.vue';
import { RunDataActiveRun } from '../../../../nodecg-speedcontrol/types';

@Component({
  components: {
    Timer,
  },
})
export default class extends Vue {
  @State runDataActiveRun!: RunDataActiveRun;

  get background(): string {
    const fileName = this.runDataActiveRun && this.runDataActiveRun.customData.layoutImage ? this.runDataActiveRun.customData.layoutImage : '16x9-1p-sample.png';
    // eslint-disable-next-line import/no-dynamic-require
    return require(`../_misc/image/${fileName}`);
  }
}
</script>

<style>
  @import url('../_misc/common.css');
</style>
