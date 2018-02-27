<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!--通过添加keep-alive 将内容保存在缓存中，可以防止组件切换中闪屏， 请求资源的浪费，毕竟页面没有什么变化-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  // 组件是个Class，所以大写规范些
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'
  import Player from 'components/player/player'
  export default {
    components: {
      MHeader,
      Tab,
      Player
    }
  }
</script>

<style lang="stylus" scoped>
</style>
