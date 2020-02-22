<template>
  <div
    class="container"
    :style="{ 'background-image': `url(${background})`,
              'clip-path': 'polygon(0px 0px, 664px 0px, 664px 3px, 664px 937px, 1910px 937px, 1910px 3px, 664px 3px, 664px 0px, 1920px 0px, 1920px 1080px, 0px 1080px, 0px 0px)' }"
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
                'top' : '960px',
                'width' : '1114px',
                'height' : '60px',
                'margin' : '0px'}"
      fontsize="2em"
    />
    <Category
      :style="{ 'left' : '0px',
                'top' : '1014px',
                'width' : '1114px',
                'height' : '64px',
                'margin' : '10px'}"
    />
  </div>
</template>

<script lang="ts">
/* eslint global-require: off */
import { Vue, Component } from 'vue-property-decorator';
import Timer from '../_misc/components/Timer.vue';
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
  background = require('../_misc/image/4x3-1p-1c-sample.png');
}
</script>

<style>
  @import url('../_misc/common.css');
</style>
