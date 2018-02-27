import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false, // 播放
  fullScreen: false,
  playlist: [],
  sequenceList: [], // 顺序
  mode: playMode.sequence, // 默认书序播放
  currentIndex: -1 // 当前歌曲下标
}

export default state
