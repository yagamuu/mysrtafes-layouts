<template>
  <div
    class="container"
  >
    <div class="background">
      <img
        src="../_misc/image/break-01.png"
        class="crossfadeImg src1"
      >
      <img
        src="../_misc/image/break-02.png"
        class="crossfadeImg src2"
      >
      <img
        src="../_misc/image/break-03.png"
        class="crossfadeImg src3"
      >
    </div>
    <Nextgame
      :style="{ 'left' : '1262px',
                'top' : '794px',
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
import Nextgame from '../_misc/components/NextGame.vue';
import { RunDataActiveRun } from '../../../../nodecg-speedcontrol/types';

@Component({
  components: {
    Nextgame,
  },
})
export default class extends Vue {
  @State runDataActiveRun!: RunDataActiveRun;
}
</script>

<style>
  @import url('../_misc/common.css');
  .background {
    position : relative;
    overflow : hidden;
    width : 1920px;
    height: 1080px;
  }

  .crossfadeImg {
    position: absolute;
    top : 0;
    left : 0;
    bottom : 0;
    right : 0;
    opacity : 0;
    animation : crossfade 180s infinite;
  }

  .src2 {
    animation-delay  : 60s;
  }

  .src3 {
    animation-delay  : 120s;
  }

  @keyframes crossfade {
  0% { opacity: 0; }
  0.5% { opacity: 1; }
  33.3% { opacity: 1; }
  33.8% { opacity: 0; }
  100% { opacity: 0; }
  }
</style>
