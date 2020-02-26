<template>
  <div
    class="container"
    :style="{ 'background-image': `url(${background})`,
              'clip-path': `polygon(0px 0px, 896px 0px, 896px 20px, 896px 920px, 1896px 920px, 1896px 20px, 896px 20px, 896px 0px, 1920px 0px, 1920px 1080px, 0px 1080px, 0px 0px)` }"
  >
    <Timer
      :style="{ 'left' : '50px',
                'top' : '774px',
                'width' : '536px',
                'height' : '86px',
                'margin' : '10px'}"
    />
    <Playername
      v-if="isCustomData"
      :style="{ 'left' : '68px',
                'top' : '16px',
                'width' : '784px',
                'height' : '110px',
                'margin' : '10px'}"
    />
    <Gamedata
      v-if="isCustomData"
      :style="{ 'left' : '16px',
                'top' : '942px',
                'width' : '1424px',
                'height' : '104px',
                'margin' : '10px'}"
    />
    <Estimate
      v-if="isCustomData"
      :style="{ 'left' : '700px',
                'top' : '826px',
                'width' : '134px',
                'height' : '40px',
                'margin' : '5px'}"
    />
  </div>
</template>

<script lang="ts">
/* eslint global-require: off */
/* eslint max-len: off */
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import Timer from '../_misc/components/Timer.vue';
import Gamedata from '../_misc/components/Gamedata.vue';
import Playername from '../_misc/components/PlayerName.vue';
import Estimate from '../_misc/components/Estimate.vue';
import { RunDataActiveRun } from '../../../../nodecg-speedcontrol/types';

@Component({
  components: {
    Timer,
    Gamedata,
    Playername,
    Estimate,
  },
})
export default class extends Vue {
  @State runDataActiveRun!: RunDataActiveRun;

  get background(): string {
    let fileName = '';
    if (this.runDataActiveRun && this.runDataActiveRun.customData.layoutImage) {
      fileName = this.runDataActiveRun.customData.layoutImage;
    } else if (this.runDataActiveRun && this.runDataActiveRun.customData.commentator) {
      fileName = '10x9-1p-00.png';
    } else {
      fileName = '10x9-1p-00.png';
    }
    // eslint-disable-next-line import/no-dynamic-require
    return require(`../_misc/image/${fileName}`);
  }

  get isCustomData(): boolean {
    if (!this?.runDataActiveRun?.customData) {
      return true;
    }
    if (!this?.runDataActiveRun?.customData?.layoutImage) {
      return true;
    }
    return false;
  }
}
</script>

<style>
  @import url('../_misc/common.css');
</style>
