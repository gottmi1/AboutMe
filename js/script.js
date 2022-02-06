const $box = document.querySelectorAll(".box");
const $header = document.querySelector("header");
const $menu = document.querySelector("#menu");
const $colorBox = document.querySelector("#color-box");
console.log($box);
const $list = document.querySelectorAll("#menu>li");
const $span = document.querySelectorAll("#main>span");

const spanContent = "이 공백을 새로운 지식으로 채울 준비가 되었습니다.";
const spanArr = spanContent.split("");

for (let i = 0; i < spanArr.length; i++) {
  setTimeout(() => {
    $span[0].textContent += spanArr[i];
    $span[0].style.transform = "scale(1)";
  }, (i + 1) * 70);
}

setTimeout(() => {
  $span[1].style.opacity = 1;
}, 2500);

setTimeout(() => {
  $header.style.opacity = 1;
  $colorBox.style.width = "300%";
  $span[0].style.color = "#eee";
  $span[1].style.color = "#eee";
}, 3000);

$list[0].addEventListener("click", () => {
  $box[0].classList.replace("hei-0", "hei-85");
  $box[1].classList.replace("hei-85", "hei-0");
  $box[2].classList.replace("hei-85", "hei-0");
  document.body.classList.add("over-hid");
  $list[0].classList.add("menu-txt");
  $list[1].classList.remove("menu-txt");
  $list[2].classList.remove("menu-txt");
  $list[3].classList.remove("menu-txt");
});
$list[1].addEventListener("click", () => {
  $box[1].classList.replace("hei-0", "hei-85");
  $box[0].classList.replace("hei-85", "hei-0");
  $box[2].classList.replace("hei-85", "hei-0");
  document.body.classList.add("over-hid");
  $list[1].classList.add("menu-txt");
  $list[0].classList.remove("menu-txt");
  $list[2].classList.remove("menu-txt");
  $list[3].classList.remove("menu-txt");
});
$list[2].addEventListener("click", () => {
  $box[2].classList.replace("hei-0", "hei-85");
  $box[1].classList.replace("hei-85", "hei-0");
  $box[0].classList.replace("hei-85", "hei-0");
  document.body.classList.add("over-hid");
  $list[2].classList.add("menu-txt");
  $list[1].classList.remove("menu-txt");
  $list[0].classList.remove("menu-txt");
  $list[3].classList.remove("menu-txt");
});
$list[3].addEventListener("click", () => {
  $box[1].classList.replace("hei-85", "hei-0");
  $box[2].classList.replace("hei-85", "hei-0");
  $box[0].classList.replace("hei-85", "hei-0");
  document.body.classList.remove("over-hid");
  $list[3].classList.add("menu-txt");
  $list[1].classList.remove("menu-txt");
  $list[2].classList.remove("menu-txt");
  $list[0].classList.remove("menu-txt");
});

// --------------------- 메뉴 클릭 했을 때 변하는 동작

// 메인 글자 사진 차례대로 나오는 동작

const $scrollDown = document.querySelector("#scroll-down");
console.log($scrollDown);
const downImg = setTimeout(() => {
  setInterval(() => {
    if ($scrollDown.classList.contains("opa-0")) {
      $scrollDown.classList.remove("opa-0");
      $scrollDown.classList.add("opa-70");
    } else {
      $scrollDown.classList.remove("opa-70");
      $scrollDown.classList.add("opa-0");
    }
  }, 800);
}, 3400);

//  스크롤 아이콘 반짝이기

const $click = document.querySelector("#click");
setInterval(() => {
  if ($click.classList.contains("opa-0")) {
    $click.classList.replace("opa-0", "opa-1");
  } else {
    $click.classList.replace("opa-1", "opa-0");
  }
}, 500);

// click!!

const $toTop = document.querySelector("#toTop");
const windowHeight = window.innerHeight;
let heightNum = 0;

$toTop.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//toTop버튼 클릭이벤트

window.addEventListener("wheel", (e) => {
  console.log(scrollY);
  if (scrollY >= 400) {
    $toTop.classList.replace("opa-0", "opa-1");
  } else {
    $toTop.classList.replace("opa-1", "opa-0");
  }

  // toTop 버튼과 스크롤 다운이미지를 나오고 들어가게 하는 동작

  let del = e.deltaY;
  console.log(del);
  if ($list[0].classList.contains("menu-txt")) {
    if (del > 0) {
      $list[0].classList.remove("menu-txt");
      $list[1].classList.add("menu-txt");
      $box[0].classList.replace("hei-85", "hei-0");
      $box[1].classList.replace("hei-0", "hei-85");
    }
  } else if ($list[1].classList.contains("menu-txt")) {
    if (del > 0) {
      $list[1].classList.remove("menu-txt");
      $list[2].classList.add("menu-txt");
      $box[1].classList.replace("hei-85", "hei-0");
      $box[2].classList.replace("hei-0", "hei-85");
    } else {
      $list[1].classList.remove("menu-txt");
      $list[0].classList.add("menu-txt");
      $box[0].classList.replace("hei-0", "hei-85");
      $box[1].classList.replace("hei-85", "hei-0");
    }
  } else if ($list[2].classList.contains("menu-txt")) {
    if (del > 0) {
      $list[2].classList.remove("menu-txt");
      $list[3].classList.add("menu-txt");
      $box[2].classList.replace("hei-85", "hei-0");
      document.body.classList.remove("over-hid");
    } else {
      $list[2].classList.remove("menu-txt");
      $list[1].classList.add("menu-txt");
      $box[1].classList.replace("hei-0", "hei-85");
      $box[2].classList.replace("hei-85", "hei-0");
    }
  } else if ($list[3].classList.contains("menu-txt")) {
    $scrollDown.style.display = "none";
    if (pageYOffset === 0 && del < 0) {
      $list[3].classList.remove("menu-txt");
      $list[2].classList.add("menu-txt");
      $box[2].classList.replace("hei-0", "hei-85");
      document.body.classList.add("over-hid");
    }
  }
});
//  스크롤로 메뉴 바꾸는 효과주는 동작
