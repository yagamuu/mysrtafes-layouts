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
      fileName = '4x3-1p-1c-00.png';
    } else {
      fileName = '4x3-1p-00.png';
    }
    // eslint-disable-next-line import/no-dynamic-require
    return require(`../_misc/image/${fileName}`);
  }
}
</script>

<style>
  @import url('../_misc/common.css');
</style>
