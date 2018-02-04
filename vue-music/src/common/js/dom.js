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

export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
