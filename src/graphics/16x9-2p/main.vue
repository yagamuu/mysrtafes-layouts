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
    <Teamtimer
      :style="{ 'left' : '20px',
                'top' : '628px',
                'width' : '918px',
                'height' : '26px',
                'margin-left' : '10px'}"
      teamid="0"
    />
    <Teamtimer
      :style="{ 'left' : '964px',
                'top' : '628px',
                'width' : '918px',
                'height' : '26px',
                'margin-left' : '10px'}"
      teamid="1"
    />
    <Playername
      v-if="isCustomData"
      :style="{ 'left' : '58px',
                'top' : '556px',
                'width' : '870px',
                'height' : '78px',
                'margin' : '10px'}"
      :teamid="0"
    />
    <Playername
      v-if="isCustomData"
      :style="{ 'left' : '1002px',
                'top' : '556px',
                'width' : '870px',
                'height' : '78px',
                'margin' : '10px'}"
      :teamid="1"
    />
    <Gamedata
      v-if="isCustomData"
      :style="{ 'left' : '28px',
                'top' : '886px',
                'width' : '1260px',
                'height' : '146px',
                'margin' : '10px'}"
    />
    <Estimate
      v-if="isCustomData"
      :style="{ 'left' : '1750px',
                'top' : '890px',
                'width' : '134px',
                'height' : '40px',
                'margin' : '5px'}"
    />
    <Commentator
      v-if="isHasCustomCommentator"
      :style="{ 'left' : '58px',
                'top' : '674px',
                'width' : '870px',
                'height' : '78px',
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
import Teamtimer from '../_misc/components/TeamTimer.vue';
import Gamedata from '../_misc/components/Gamedata.vue';
import Playername from '../_misc/components/PlayerName.vue';
import Commentator from '../_misc/components/Commentator.vue';
import Estimate from '../_misc/components/Estimate.vue';
import { RunDataActiveRun } from '../../../../nodecg-speedcontrol/types';

@Component({
  components: {
    Timer,
    Teamtimer,
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
      fileName = '16x9-2p-1c-00.png';
    } else {
      fileName = '16x9-2p-00.png';
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
