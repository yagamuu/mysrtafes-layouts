<template>
  <div :style="{'position' : 'absolute'}">
    <div class="marquee">
      <div
        class="marquee-inner"
        :style="{ 'font-size' : fontsize }"
      >
        次のゲーム：{{ runDataActiveRun.game }} / カテゴリ：{{ runDataActiveRun.category }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint global-require: off */
import { Vue, Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { RunDataActiveRun } from '../../../../../nodecg-speedcontrol/types';

@Component
export default class Nextgame extends Vue {
  @State runDataActiveRun!: RunDataActiveRun;

  text = '';

  @Prop({ type: String, default: '5.0em' })
  fontsize!: string;
}
</script>

<style scoped>
  /* https://qiita.com/nissuk/items/7d5545a9f6177ff965dc */
  /** マーキーさせたい部分 */
  .marquee {
    overflow: hidden; /* スクロールバーが出ないように */
    position: relative; /* マーキーの内容部分の位置の基準になるように */
    height: 86px;
  }
  /* マーキーの内容部分の高さ確保 */
  .marquee::after {
    content: "";
    white-space: nowrap;
    display: inline-block;
  }
  /* マーキーさせたい部分(内側) */
  .marquee > .marquee-inner {
    position: absolute;
    top: 0;
    white-space: nowrap;
    animation-name: marquee;
    animation-timing-function: linear;
    animation-duration: 20s;
    animation-iteration-count: infinite;
  }
  /* マウスオーバーでマーキーストップ */
  .marquee > .marquee-inner:hover {
    animation-play-state: paused;
    cursor: default;
  }
  /** マーキーアニメーション */
  @keyframes marquee {
      0% { left: 100%; transform: translate(0); }
    100% { left: 0; transform: translate(-100%); }
  }
</style>
