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

    // --------------------- 메뉴 클릭 했을 때 변하는 동작

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
    }, 3300);
    })

    // 메인 글자 사진 차례대로 나오는 동작

    const $scrollDown = document.querySelector("#scroll-down");
    console.log($scrollDown);
      const downImg = setInterval(() => {
        if($scrollDown.classList.contains('opa-0')) {
        $scrollDown.classList.remove('opa-0');
        $scrollDown.classList.add('opa-1');
        } else {
          $scrollDown.classList.remove('opa-1');
          $scrollDown.classList.add('opa-0');
        }
    }, 1500);

      


    //  스크롤 아이콘 반짝이기

    const $toTop = document.querySelector('#toTop');
    const windowHeight = window.innerHeight;
    let heightNum = 0;


    $toTop.addEventListener('click', () => {
      scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })

    //toTop버튼 클릭이벤트

    window.addEventListener('wheel', (e) => {
      
      console.log(scrollY);
      if(scrollY >= 500) {
        $toTop.classList.replace('opa-0','opa-1');
        $scrollDown.classList.replace('opa-1','opa-0');
        clearInterval(downImg);
      } else {
        $toTop.classList.replace('opa-1','opa-0');
      }

      // toTop 버튼과 스크롤 다운이미지를 나오고 들어가게 하는 동작


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
    //  스크롤로 메뉴 바꾸는 효과주는 동작