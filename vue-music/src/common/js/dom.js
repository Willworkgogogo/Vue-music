export function addClass(el, className) {
  if (hasClass(el, className)) return
  let classArray = el.className.split(' ')
  classArray.push(className)
  el.className = classArray.join(' ')
}

/*
* @return {bool}
* */
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
