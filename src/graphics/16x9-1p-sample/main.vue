<template>
  <div
    class="container"
    :style="{ 'background-image': `url(${background})`,
              'clip-path': 'polygon(0px 0px, 444px 0px, 444px 8px, 444px 833px, 1908px 833px, 1908px 8px, 444px 8px, 444px 0px, 1920px 0px, 1920px 1080px, 0px 1080px, 0px 0px)' }"
  >
    <Timer
      :style="{ 'left' : '1138px',
                'top' : '842px',
                'width' : '762px',
                'height' : '220px',
                'margin' : '10px'}"
    />
  </div>
</template>

<script lang="ts">
/* eslint global-require: off */
/* eslint max-len: off */
import { Vue, Component } from 'vue-property-decorator';
import Timer from '../_misc/components/sample/Timer.vue';

@Component({
  components: {
    Timer,
  },
})
export default class extends Vue {
  background = require('../_misc/image/16x9-1p-sample.png');
}
</script>

<style>
  @import url('../_misc/common.css');
</style>
