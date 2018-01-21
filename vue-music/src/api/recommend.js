import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

// 获取播放列表
export function getPlayList() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    categoryId: 10000000,
    needNewCode: 0,
    rnd: Math.random(),
    sortId: 5,
    sin: 0,
    ein: 29
  })

  return jsonp(url, data, options)
}
