const debounce = (fn, wait) => {
  let timer = null
  console.log(fn)
  return () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this)
    }, wait)
  }
}

var fn = function () {
  console.log('boom')
}
debounce(fn, 500)()