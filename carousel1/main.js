const images = $('.images > img')
const buttons = $('.buttons > .button')
const length = images.length

for (let i = 0; i < buttons.length; i++) {
  $(buttons[i]).on('click', () => {
    var p = i * -400
    $('#images').css({
      transform: 'translate(' + p + 'px)'
    })
  })
}