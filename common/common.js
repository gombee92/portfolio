// swiper ↓
var swiper = new Swiper(".proj", {
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  pagination: {
    el: ".pg1",
    clickable: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
});

// swiper ↑

const elm = document.querySelectorAll(".section");
const elmCount = elm.length;
elm.forEach(function (item, index) {
  item.addEventListener("mousewheel", function (event) {
    // event.preventDefault();
    let delta = 0;

    if (event.wheelDelta) {
      delta = event.wheelDelta;
    }

    // 크로스 브라우저
    if (!event) event = window.event;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
      if (window.opera) {
        delta = -delta;
      }
    } else if (event.detail) {
      delta = -event.detail / 3;
    }

    let moveTop = window.scrollY;
    let elmSelector = elm[index];

    // 휠 다운
    if (delta < 0) {
      if (elmSelector !== elmCount - 1) {
        try {
          moveTop =
            window.pageYOffset +
            elmSelector.nextElementSibling.getBoundingClientRect().top;
        } catch (e) { }
      }
    }
    // 휠 업
    else {
      if (elmSelector !== 0) {
        try {
          moveTop =
            window.pageYOffset +
            elmSelector.previousElementSibling.getBoundingClientRect().top;
        } catch (e) { }
      }
    }

    window.scrollTo({ top: moveTop, left: 0 });
  });
});

const $gotop = document.querySelector(".gotop");
const $menu = document.querySelector(".menu");

// 네비 등장시키기
window.addEventListener("scroll", function () {
  let scrollTop =
    document.documentElement.scrollTop || window.scrollY || window.pageYOffset;

  if (scrollTop > 200) {
    document.querySelector(".nav").classList.add("on");
    $gotop.classList.remove("on");
  } else {
    document.querySelector(".nav").classList.remove("on");
    $gotop.classList.add("on");
  }
});



//메뉴

// 헥사곤
let hexagoni = document.getElementsByClassName("hexagon");

for (let i = 0; i < hexagoni.length; i++) {
  hexagoni[i].addEventListener("mouseenter", () => {
    hexagoni[i].classList.add("light");
    setTimeout(function () {
      hexagoni[i].classList.remove("light");
    }, 800);
  });
}

// 커서
let $body = document.documentElement;
let $cursor = document.querySelector(".bee_cursor");
$body.addEventListener("mousemove", function (e) {
  let x = e.pageX - 30;
  let y = e.pageY - 30;
  $cursor.style.cssText = `
      left:${x}px; top:${y}px;
    `;
});

