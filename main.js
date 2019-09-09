let $buttons = $('#buttons > button')
let $slides = $('#slides')
let $images = $slides.children('img')

let current = 0

let $firstCopy = $images.eq(0).clone(true)
let $lastCopy = $images.eq($images.length-1).clone(true)

$slides.prepend($lastCopy)
$slides.append($firstCopy)

$buttons.eq(0).on('click', function(){
  if( current === 2 ){
    //说明从最后一张到第一张，所以要先移动负四个单位，再移动负一个单位
    $slides.css({transform: 'translateX(-4800px)'})
      .one('transitionend', function(){
        $slides.hide()
          .offset()
        $slides.css({transform: 'translateX(-1200px)'})
          .show()
    })
  }else{
    // 点击第一张，移动负一个单位
    $slides.css({transform: 'translateX(-1200px)'})
  }
  current = 0
})

$buttons.eq(1).on('click', function(){
  // 点击第二张，移动负两个单位
  $slides.css({transform: 'translateX(-2400px)'})
  current = 1
})

$buttons.eq(2).on('click', function(){
  if( current === 0 ){
    //说明是从第一张到最后一张，所以要先移动 0 个单位，再负三个单位
    $slides.css({transform: 'translateX(0px)'})
      .one('transitionend', function(){
        $slides.hide()
          .offset()
        $slides.css({transform: 'translateX(-3600px)'})
          .show()
    })
  }else{
    // 点击第三张，移动负三个单位
    $slides.css({transform: 'translateX(-3600px)'})
  } 
  current = 2
})
