<template>
  <div
    class="container"
    :style="{ 'background-image': `url(${background})`,
              'clip-path': `polygon(0px 0px, 452px 0px, 452px 30px, 452px 840px, 1892px 840px, 1892px 30px, 452px 30px, 452px 0px, 1920px 0px, 1920px 1080px, 0px 1080px, 0px 0px)` }"
  >
    <Timer
      :style="{ 'left' : '26px',
                'top' : '734px',
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
    let fileName = '';
    if (this.runDataActiveRun && this.runDataActiveRun.customData.layoutImage) {
      fileName = this.runDataActiveRun.customData.layoutImage;
    } else if (this.runDataActiveRun && this.runDataActiveRun.customData.commentator) {
      fileName = '16x9-1p-1c-00.png';
    } else {
      fileName = '16x9-1p-00.png';
    }
    // eslint-disable-next-line import/no-dynamic-require
    return require(`../_misc/image/${fileName}`);
  }
}
</script>

<style>
  @import url('../_misc/common.css');
</style>
