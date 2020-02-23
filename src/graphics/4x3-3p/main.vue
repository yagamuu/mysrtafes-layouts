<template>
  <div
    class="container"
    :style="{ 'background-image': `url(${background})`,
              'clip-path': `polygon(0px 0px, 24px 0px, 24px 25px, 24px 505px, 664px 505px, 664px 25px, 24px 25px, 24px 0px, 25px 0px, 25px 576px, 25px 1056px, 665px 1056px, 665px 576px, 25px 576px, 25px 0px, 1255px 0px,
1255px 25px, 1255px 505px, 1895px 505px, 1895px 25px, 1255px 25px, 1255px 0px, 1920px 0px, 1920px 1080px, 0px 1080px, 0px 0px)` }"
  >
    <Timer
      :style="{ 'left' : '754px',
                'top' : '960px',
                'width' : '482px',
                'height' : '86px',
                'margin' : '10px'}"
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
