<template>
  <div class="recommend" ref="recommend">
    <div v-if="recommends.length" class="slider-wrapper">
      <slider>
        <div v-for="item in recommends">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" />
          </a>
        </div>
      </slider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import { getRecommend, getPlayList } from 'api/recommend'
  import { ERR_OK } from 'api/config'

  export default {
    data() {
      return {
        recommends: []
      }
    },
    created() {
      this._getRecommend()
      this._getPlayList()
    },
    methods: {
      _getRecommend() {
        getRecommend()
          .then((res) => {
            if (res.code === ERR_OK) {
              this.recommends = res.data.slider
            }
          })
      },
      _getPlayList() {
        getPlayList()
          .then((res) => {
            if (res.code === ERR_OK) {
              console.log('。。。', res.data.list)
            }
          })
      }
    },
    components: {
      Slider
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
