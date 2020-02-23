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
    <Playerdata
      :style="{ 'left' : '54px',
                'top' : '316px',
                'width' : '336px',
                'height' : '154px',
                'margin' : '10px'}"
    />
    <Game
      :style="{ 'left' : '0px',
                'top' : '842px',
                'width' : '1114px',
                'height' : '130px',
                'margin' : '10px'}"
    />
    <Category
      :style="{ 'left' : '0px',
                'top' : '998px',
                'width' : '1114px',
                'height' : '98',
                'margin' : '10px'}"
    />
  </div>
</template>

<script lang="ts">
/* eslint global-require: off */
/* eslint max-len: off */
import { Vue, Component } from 'vue-property-decorator';
import Timer from '../_misc/components/sample/Timer.vue';
import Game from '../_misc/components/Game.vue';
import Category from '../_misc/components/Category.vue';
import Playerdata from '../_misc/components/PlayerData.vue';

@Component({
  components: {
    Timer,
    Game,
    Category,
    Playerdata,
  },
})
export default class extends Vue {
  text = 'Example';
  background = require('../_misc/image/16x9-1p-1c-sample.png');
}
</script>

<style>
  @import url('../_misc/common.css');
</style>
