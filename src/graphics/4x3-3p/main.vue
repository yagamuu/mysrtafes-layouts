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
    <Teamtimer
      :style="{ 'left' : '667px',
                'top' : '96px',
                'width' : '548px',
                'height' : '26px',
                'margin-left' : '10px'}"
      teamid="0"
    />
    <Teamtimer
      :style="{ 'left' : '694px',
                'top' : '480px',
                'width' : '548px',
                'height' : '26px',
                'margin-left' : '10px'}"
      teamid="1"
    />
    <Teamtimer
      :style="{ 'left' : '668px',
                'top' : '645px',
                'width' : '548px',
                'height' : '26px',
                'margin-left' : '10px'}"
      teamid="2"
    />
    <Playername
      v-if="isCustomData"
      :style="{ 'left' : '708px',
                'top' : '24px',
                'width' : '498px',
                'height' : '80px',
                'margin' : '10px'}"
      :teamid="0"
    />
    <Playername
      v-if="isCustomData"
      :style="{ 'left' : '732px',
                'top' : '408px',
                'width' : '498px',
                'height' : '80px',
                'margin' : '10px'}"
      :teamid="1"
    />
    <Playername
      v-if="isCustomData"
      :style="{ 'left' : '708px',
                'top' : '574px',
                'width' : '498px',
                'height' : '80px',
                'margin' : '10px'}"
      :teamid="2"
    />
    <Gamedata
      v-if="isCustomData"
      :style="{ 'left' : '748px',
                'top' : '764px',
                'width' : '1090px',
                'height' : '146px',
                'margin' : '10px'}"
      game-fontsize="2.5em"
    />
    <Estimate
      v-if="isCustomData"
      :style="{ 'left' : '1300px',
                'top' : '1000px',
                'width' : '134px',
                'height' : '40px',
                'margin' : '5px'}"
    />
    <Commentator
      v-if="isHasCustomCommentator"
      :style="{ 'left' : '1378px',
                'top' : '572px',
                'width' : '498px',
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
import Teamtimer from '../_misc/components/TeamTimer.vue';
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
      fileName = '4x3-3p-1c-00.png';
    } else {
      fileName = '4x3-3p-00.png';
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
    return !!(this.runDataActiveRun?.customData?.commentator);
  }
}
</script>

<style>
  @import url('../_misc/common.css');
</style>
