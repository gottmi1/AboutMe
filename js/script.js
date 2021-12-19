const $box = document.querySelectorAll('.box');
    console.log($box);
    const $list = document.querySelectorAll('#menu>li');

    $list[0].addEventListener('click', () => {
      $box[0].classList.replace('hei-0','hei-85');
      $box[1].classList.replace('hei-85','hei-0');
      $box[2].classList.replace('hei-85','hei-0');
      document.body.classList.add('over-hid');
      $list[0].classList.add('menu-txt');
      $list[1].classList.remove('menu-txt');
      $list[2].classList.remove('menu-txt');
      $list[3].classList.remove('menu-txt');
    })
    $list[1].addEventListener('click', () => {
      $box[1].classList.replace('hei-0','hei-85');
      $box[0].classList.replace('hei-85','hei-0');
      $box[2].classList.replace('hei-85','hei-0');
      document.body.classList.add('over-hid');
      $list[1].classList.add('menu-txt');
      $list[0].classList.remove('menu-txt');
      $list[2].classList.remove('menu-txt');
      $list[3].classList.remove('menu-txt');
    })
    $list[2].addEventListener('click', () => {
      $box[2].classList.replace('hei-0','hei-85');
      $box[1].classList.replace('hei-85','hei-0');
      $box[0].classList.replace('hei-85','hei-0');
      document.body.classList.add('over-hid');
      $list[2].classList.add('menu-txt');
      $list[1].classList.remove('menu-txt');
      $list[0].classList.remove('menu-txt');
      $list[3].classList.remove('menu-txt');
    })
    $list[3].addEventListener('click', () => {
      $box[1].classList.replace('hei-85','hei-0');
      $box[2].classList.replace('hei-85','hei-0');
      $box[0].classList.replace('hei-85','hei-0');
      document.body.classList.remove('over-hid');
      $list[3].classList.add('menu-txt');
      $list[1].classList.remove('menu-txt');
      $list[2].classList.remove('menu-txt');
      $list[0].classList.remove('menu-txt');
    })


    const $mainTxt = document.querySelectorAll('#main>img');
    window.addEventListener('load',() => {
      for(let i = 0; i<$mainTxt.length-2; i++) {
      setInterval(() => {
        $mainTxt[i].classList.replace('opa-0','opa-1');
      }, 800 * (i+1));
    }

    setInterval(() => {
      $mainTxt[3].classList.replace('opa-0','opa-1');
      $mainTxt[4].classList.replace('opa-0','opa-1');
    }, 3700);
    })


    const windowHeight = window.innerHeight;
    let heightNum = 0;

    window.addEventListener('wheel', (e) => {
      let del = e.deltaY;
      console.log(del);
      if ( $list[0].classList.contains('menu-txt')) {
        if(del > 0) {
          $list[0].classList.remove('menu-txt')
          $list[1].classList.add('menu-txt')
          $box[0].classList.replace('hei-85','hei-0');
          $box[1].classList.replace('hei-0','hei-85');
        }
      } else if ($list[1].classList.contains('menu-txt')) {
        if(del > 0) {
          $list[1].classList.remove('menu-txt')
          $list[2].classList.add('menu-txt')
          $box[1].classList.replace('hei-85','hei-0');
          $box[2].classList.replace('hei-0','hei-85');
        } else {
          $list[1].classList.remove('menu-txt')
          $list[0].classList.add('menu-txt')
          $box[0].classList.replace('hei-0','hei-85');
          $box[1].classList.replace('hei-85','hei-0');
        }
      } else if ($list[2].classList.contains('menu-txt')) {
        if(del > 0) {
          $list[2].classList.remove('menu-txt')
          $list[3].classList.add('menu-txt')
          $box[2].classList.replace('hei-85','hei-0');
          document.body.classList.remove('over-hid');
        } else {
          $list[2].classList.remove('menu-txt')
          $list[1].classList.add('menu-txt')
          $box[1].classList.replace('hei-0','hei-85');
          $box[2].classList.replace('hei-85','hei-0');
        }
      } else if ($list[3].classList.contains('menu-txt')) {
        if (pageYOffset === 0 && del < 0 ) {
          $list[3].classList.remove('menu-txt')
          $list[2].classList.add('menu-txt')
          $box[2].classList.replace('hei-0','hei-85');
          document.body.classList.add('over-hid');
        }
      }
    })