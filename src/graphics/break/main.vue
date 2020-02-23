<template>
  <div
    class="container"
  >
    <div class="background">
      <img src="../_misc/image/break-01.png">
      <img src="../_misc/image/break-02.png">
      <img src="../_misc/image/break-03.png">
    </div>
  </div>
</template>

<script lang="ts">
/* eslint global-require: off */
/* eslint max-len: off */
import { Vue, Component, Watch } from 'vue-property-decorator';
import { State } from 'vuex-class';
import Clock from '../_misc/components/Clock.vue';
import { RunDataActiveRun } from '../../../../nodecg-speedcontrol/types';

@Component({
  components: {
    Clock,
  },
})
export default class extends Vue {
  @State runDataActiveRun!: RunDataActiveRun;
  count = 0;
  background = require('../_misc/image/break-01.png');

  incrementCount(): void {
    this.count += 1;
  }

  @Watch('count')
  changeBackground(): void {
    const id = (this.count % 3) + 1;
    // eslint-disable-next-line import/no-dynamic-require
    this.background = require(`../_misc/image/break-0${id}.png`);
  }
}
</script>

<style>
  @import url('../_misc/common.css');
</style>
