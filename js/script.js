$(document).ready(function () {});

window.onload = function () {
  let pag2TxtBoxA = $(".pag-2-txtbox a");
  let pag2Title = $(".sw-pag2-title");
  let datArr = [];
  let dataArrIndex = 0;

  // 슬라이드 구현
  let swhsSlide = $(".sw-hs-slide");
  let swhsWMax = 488;
  let swhsW = 176;
  let swhsD = 30;
  let posX = [];
  let tempPos = 0;
  // 최소 위치
  let swhsMin = -(swhsW + swhsD);
  let swhsTotal = swhsSlide.length;
  let swhsIndex = 0;
  let swhsDir = "left";

  let swhsNext = $(".sw-pag2-next");
  let swhsPrev = $(".sw-pag2-prev");

  swhsNext.click(function () {
    swhsIndex++;
    if (swhsIndex >= swhsTotal) {
      swhsIndex = 0;
    }
    swhsDir = "left";
    swhsMove();
  });

  swhsPrev.click(function () {
    swhsIndex--;
    if (swhsIndex < 0) {
      swhsIndex = swhsTotal - 1;
    }
    swhsDir = "right";
    swhsMove();
  });

  function fetchData() {
    axios
      .get("data/pag2_data.json")
      .then(function (response) {
        // console.log("data : ", response.data);

        datArr.push(response.data.coffee);
        datArr.push(response.data.dessert);
        datArr.push(response.data.deli);

        makeSlide(0);
      })
      .catch((err) => console.log("에러 발생 :", err));
  }

  function makeSlide(_index) {
    let data = datArr[_index];
    let tempHtml = "";
    for (i = 0; i < data.length; i++) {
      temp = `
          <div class="sw-hs-slide">
            <a href="#">
              <img src="images/${data[i].link}" alt="${data[i].name}">
            </a>
          </div>
        `;

      tempHtml += temp;
    }
    document.getElementById("sw-hs-wrap").innerHTML = tempHtml;

    swhsSlide = $(".sw-hs-slide");
    swhsTotal = swhsSlide.length;
    swhsIndex = 0;
    swhsDir = "left";
    dataArrIndex = _index;

    playSlide();
  }

  // pag2 slide
  function playSlide() {
    // 초기 위치 배열
    $.each(swhsSlide, function (index, item) {
      if (index == 0) {
        posX[index] = 0;
        tempPos = swhsWMax + swhsD;
      } else {
        posX[index] = tempPos;
        tempPos = tempPos + swhsD + swhsW;
      }
    });
    posX[swhsTotal] = tempPos;

    swhsSlide.eq(swhsIndex).addClass("sw-hs-slide-active");

    // 초기 셋팅
    $.each(swhsSlide, function (index, item) {
      $(this).css("left", posX[index]);
      $(this).attr("data-index", index);
    });

    // 최초값.
    let tt = datArr[dataArrIndex][swhsIndex].name;
    pag2Title.text(tt);
  }

  function swhsMove() {
    // 변경값
    let tempName = datArr[dataArrIndex][swhsIndex].name;
    pag2Title.text(tempName);

    if (swhsDir == "left") {
      $.each(swhsSlide, function (index, item) {
        let tempIndex = $(this).attr("data-index");
        let tempX = tempIndex - 1;
        let tgX = 0;
        if (tempX < 0) {
          $(this).css("left", posX[swhsTotal]);
          $(this).removeClass("sw-hs-slide-active");
          $(this).attr("data-index", swhsTotal - 1);
          tgX = posX[swhsTotal - 1];
        } else if (tempX == 0) {
          $(this).attr("data-index", tempX);
          tgX = posX[tempX];
        } else {
          $(this).attr("data-index", tempX);
          tgX = posX[tempX];
        }

        gsap.to($(this), 0.1, {
          left: tgX,
          onComleted: function () {
            swhsSlide.eq(swhsIndex).addClass("sw-hs-slide-active");
          },
        });
      });
    } else {
      $.each(swhsSlide, function (index, item) {
        let tempIndex = $(this).attr("data-index");
        tempIndex = parseInt(tempIndex);

        let tempX = tempIndex + 1;
        let tgX = 0;
        if (tempX >= swhsTotal) {
          $(this).css("left", swhsMin);
          $(this).attr("data-index", 0);
          tempX = 0;
          tgX = posX[0];
        } else if (tempX == 1) {
          $(this).removeClass("sw-hs-slide-active");
          $(this).attr("data-index", tempX);
          tgX = posX[tempX];
        } else {
          $(this).attr("data-index", tempX);
          tgX = posX[tempX];
        }
        gsap.to($(this), 0.1, {
          left: tgX,
          onComleted: function () {
            swhsSlide.eq(swhsIndex).addClass("sw-hs-slide-active");
          },
        });
      });
    }
  }

  fetchData();

  // 셀렉터
  pag2TxtBoxA.eq(0).find("h4").addClass("pag2-mainh4-focus");
  pag2TxtBoxA.eq(0).find("p").addClass("pag2-mainsubtxt-focus");

  $.each(pag2TxtBoxA, function (index, item) {
    $(this).click(function (event) {
      event.preventDefault();
      makeSlide(index);

      pag2TxtBoxA.find("h4").removeClass("pag2-mainh4-focus");
      pag2TxtBoxA.find("p").removeClass("pag2-mainsubtxt-focus");

      $(this).find("h4").addClass("pag2-mainh4-focus");
      $(this).find("p").addClass("pag2-mainsubtxt-focus");
    });
  });

  // haeder
  let header = $(".header");

  new Waypoint({
    element: $(".pag-2"),
    handler: function (direction) {
      if (direction == "down") {
        header.addClass("header-active");
      } else if (direction == "up") {
        header.removeClass("header-active");
      }
    },
    offset: "10%",
  });

  // ======= allmenu 기능 ========
  let closeBt = $(".allmenu-close-bt");
  let allmenuWrap = $(".allmenu-wrap");
  let allmenuBt = $(".allmenu-bt");
  // all menu 오픈기능
  allmenuBt.click(function () {
    allmenuWrap.addClass("allmenu-wrap-open");
  });
  // all menu 닫기기능
  closeBt.click(function () {
    allmenuWrap.removeClass("allmenu-wrap-open");
  });

  allmenuWrap.addClass("allmenu-wrap-open");

  let allMenuDepth1 = $(".allmenu-depth-1");
  let allMenuDepth1LiA = $(".allmenu-depth-1 > li > a");
  let allmenuDepth1_active = $(".allmenuDepth_1-active");

  allMenuDepth1.mouseleave(function () {
    allMenuDepth1.removeClass("allmenuDepth_1-active");
  });

  $.each(allMenuDepth1LiA, function (index, item) {
    $(this).mouseenter(function () {
      allMenuDepth1.addClass("allmenuDepth_1-active");
      $(this).addClass("active_A_Main");
    });
    $(this).mouseleave(function () {
      $(this).removeClass("active_A_Main");
    });
  });

  //  visual-slide 슬라이드
  let sw_visual = new Swiper(".sw-visual", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    // pg
    pagination: {
      el: ".sw-visual-pg",
      type: "fraction",
    },
    // nav
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
  });

  //pag4 swiper

  let sw_pag4 = new Swiper(".sw-pag4", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 460,
    allowTouchMove: false,
    // pg
    pagination: {
      el: ".sw-pag4-pg",
      type: "fraction",
    },
    // nav
    navigation: {
      nextEl: ".sw-pag4-next",
      prevEl: ".sw-pag4-prev",
    },
  });

  // pag6 swiper
  let titleArr = ["1", "보도자료", "공지사항"];

  let sw_pag6 = new Swiper(".sw-pag6", {
    allowTouchMove: false,
    pagination: {
      el: ".pag6-pg",
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">${titleArr[index + 1]}</span>
        `;
      },
    },
  });

  // // gotobox

  // let goToBox_A = $('.gotobox > a');
  // // let goToBox_A_Before = $('.gotobox > a::before');

  // goToBox_A.mouseenter(function(){
  //   $(this).attr('width', 240);
  // });
  // goToBox_A.mouseleave(function(){
  //   $(this).attr('width', 0);
  // });
};
