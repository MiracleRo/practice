const images = $('.images > img')

const length = images.length
let n = 0

setInterval(() => { 
  goLeave(getNode(n)).one('transitionend', (e) => {
    goEnter($(e.currentTarget))
  })
 	n = exChageN(n + 1)
  goCurrent(getNode(n))
}, 3000)

init()


function exChageN(n) {
  return n % length
}

function init() {
  getNode(n).addClass('current')
  getNode(n).siblings().addClass('enter')
}


function goCurrent($node) {
  return $node.removeClass('enter leave').addClass('current')
}

function goLeave($node) {

  return $node.removeClass('enter current').addClass('leave')
}

function goEnter($node) {
  return $node.removeClass('leave current').addClass('enter')
}

function getNode(index) {
  return $(images).eq(index)
}