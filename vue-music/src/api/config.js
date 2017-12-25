// commonParams 请求时固定参数的封装
export const commonParams = {
  g_tk: 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

// jsonp跨域回调函数名
export const options = {
  param: 'jsonpCallback'
}

// 定义：请求正常状态码
export const ERR_OK = 0
