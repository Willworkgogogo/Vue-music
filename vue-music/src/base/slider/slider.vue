<template>
  <div class="slider">
    <div class="slider-group">
      <slot></slot>
    </div>
    <div class="dots">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
</style>
