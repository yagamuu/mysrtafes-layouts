<template>
  <div
    class="container"
    :style="{ 'background-image': `url(${background})`,
              'clip-path': `polygon(0px 0px, 692px 0px, 692px 29px, 692px 929px, 1892px 929px, 1892px 29px, 692px 29px, 692px 0px, 1920px 0px, 1920px 1080px, 0px 1080px, 0px 0px)` }"
  >
    <Timer
      :style="{ 'left' : '24px',
                'top' : '734px',
                'width' : '624px',
                'height' : '86px',
                'margin' : '10px'}"
    />
    <Playername
      v-if="isCustomData"
      :style="{ 'left' : '24px',
                'top' : '56px',
                'width' : '624px',
                'height' : '80px',
                'margin' : '10px'}"
    />
    <Gamedata
      v-if="isCustomData"
      :style="{ 'left' : '12px',
                'top' : '951px',
                'width' : '1426px',
                'height' : '104px',
                'margin' : '10px'}"
    />
    <Estimate
      v-if="isCustomData"
      :style="{ 'left' : '524px',
                'top' : '882px',
                'width' : '134px',
                'height' : '40px',
                'margin' : '5px'}"
    />
    <Commentator
      v-if="isHasCustomCommentator"
      :style="{ 'left' : '24px',
                'top' : '424px',
                'width' : '624px',
                'height' : '80px',
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
import Gamedata from '../_misc/components/Gamedata.vue';
import Playername from '../_misc/components/PlayerName.vue';
import Commentator from '../_misc/components/Commentator.vue';
import Estimate from '../_misc/components/Estimate.vue';
import { RunDataActiveRun } from '../../../../nodecg-speedcontrol/types';

@Component({
  components: {
    Timer,
    Gamedata,
    Playername,
    Estimate,
    Commentator,
  },
})
export default class extends Vue {
  @State runDataActiveRun!: RunDataActiveRun;

  get background(): string {
    let fileName = '';
    if (this.runDataActiveRun && this.runDataActiveRun.customData.layoutImage) {
      fileName = this.runDataActiveRun.customData.layoutImage;
    } else if (this.runDataActiveRun && this.runDataActiveRun.customData.commentator) {
      fileName = '4x3-1p-1c-00.png';
    } else {
      fileName = '4x3-1p-00.png';
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

  get isHasCustomCommentator(): boolean {
    return !!(this.isCustomData && this.runDataActiveRun.customData.commentator);
  }
}
</script>

<style>
  @import url('../_misc/common.css');
</style>
