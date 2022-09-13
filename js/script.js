$(document).ready(function () {




});

window.onload = function () {

  fetchData = () => {
    axios
      .get("data/pag2_data.json")
      .then(function (response) {
        console.log("data : ", response.data);

        let coffeeData = response.data.coffee;
        let dessertData = response.data.dessert;
        let deliData = response.data.deli;

        console.log(coffeeData);
        console.log(dessertData);
        console.log(deliData);

        let tempHtml = '';
        for (i = 0; i < coffeeData.length; i++) {

            temp = `
              <div class="sw-hs-slide">
                <a href="#">
                  <img src="images/${coffeeData[i].link}" alt="${coffeeData[i].name}">
                </a>
              </div>
            `;

          tempHtml += temp

        }
        document.getElementById("sw-hs-wrap").innerHTML = tempHtml

      })
      .catch(err => console.log("에러 발생 :", err));

  }

  fetchData();


      


  let header = $('.header');
  let mainGnbDepth1_li_a = $('.maingnb-depth-1 > li > a');
  let logo = $('.logo');
  let allmenuBt = $('.allmenu-bt');


  // 메인메뉴 오픈 기능
  header.mouseenter(function () {

    header.addClass('header-open');
    // depth1_li_a.addClass('depth1_li_a-open');
    mainGnbDepth1_li_a.css('color', '#000');
    logo.addClass('logo-open');
    allmenuBt.addClass('allmenu-bt-open');

  });

  // 메인메뉴 닫기 기능
  header.mouseleave(function () {

    header.removeClass('header-open');
    // depth1_li_a.removeClass('depth1_li_a-open');
    mainGnbDepth1_li_a.css('color', '#fff');
    logo.removeClass('logo-open');
    allmenuBt.removeClass('allmenu-bt-open');

  });




  // allmenu 기능

  let closeBt = $('.allmenu-close-bt');
  let allmenuWrap = $('.allmenu-wrap');

  // all menu 오픈기능
  allmenuBt.click(function () {
    allmenuWrap.addClass('allmenu-wrap-open');
  });

  // all menu 닫기기능
  closeBt.click(function () {
    allmenuWrap.removeClass('allmenu-wrap-open');
  });



  //  visual-slide 슬라이드
  let sw_visual = new Swiper('.sw-visual', {
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



  // pag2 slide

  // 슬라이드 구현
  let swhsSlide = $('.sw-hs-slide');
  let swhsWMax = 488;
  let swhsW = 176;
  let swhsD = 30;
  let posX = [];
  let tempPos = 0;
  // 최소 위치
  let swhsMin = -(swhsW + swhsD);
  let swhsTotal = swhsSlide.length;
  let swhsIndex = 0;
  let swhsDir = 'left';
  // 초기 위치 배열
  $.each(swhsSlide, function (index, item) {
    if (index == 0) {
      posX[index] = 0;
      tempPos = swhsWMax + swhsD
    } else {
      posX[index] = tempPos;
      tempPos = tempPos + swhsD + swhsW;
    }
  });
  posX[swhsTotal] = tempPos;

  // 초기 셋팅
  $.each(swhsSlide, function (index, item) {
    $(this).css('left', posX[index]);
    $(this).attr('data-index', index)
  })

  let swhsNext = $('.sw-pag2-next');
  let swhsPrev = $('.sw-pag2-prev');

  swhsNext.click(function () {
    swhsIndex++;
    if (swhsIndex >= swhsTotal) {
      swhsIndex = 0;
    }
    swhsDir = 'left';
    swhsMove();
  })

  swhsPrev.click(function () {
    swhsIndex--;
    if (swhsIndex < 0) {
      swhsIndex = swhsTotal - 1;
    }
    swhsDir = 'right';
    swhsMove();
  })

  function swhsMove() {

    if (swhsDir == 'left') {
      $.each(swhsSlide, function (index, item) {
        let tempIndex = $(this).attr('data-index');
        let tempX = tempIndex - 1;
        let tgX = 0;
        if (tempX < 0) {
          $(this).css('left', posX[swhsTotal]);
          $(this).removeClass('sw-hs-slide-active');
          $(this).attr('data-index', swhsTotal - 1);
          tgX = posX[swhsTotal - 1];
        } else if (tempX == 0) {
          $(this).attr('data-index', tempX);
          tgX = posX[tempX];
        } else {
          $(this).attr('data-index', tempX);
          tgX = posX[tempX];
        }

        gsap.to($(this), 0.1, {
          left: tgX,
          onComleted: function () {
            swhsSlide.eq(swhsIndex).addClass('sw-hs-slide-active')
          }
        });

      })

    } else {

      $.each(swhsSlide, function (index, item) {
        let tempIndex = $(this).attr('data-index');
        tempIndex = parseInt(tempIndex);

        let tempX = tempIndex + 1;
        let tgX = 0;
        if (tempX >= swhsTotal) {
          $(this).css('left', swhsMin);
          $(this).attr('data-index', 0);
          tempX = 0;
          tgX = posX[0];
        } else if (tempX == 1) {
          $(this).removeClass('sw-hs-slide-active');
          $(this).attr('data-index', tempX);
          tgX = posX[tempX];
        } else {
          $(this).attr('data-index', tempX);
          tgX = posX[tempX];
        }
        gsap.to($(this), 0.1, {
          left: tgX,
          onComleted: function () {
            swhsSlide.eq(swhsIndex).addClass('sw-hs-slide-active')
          }
        });
      })
    }
  }




  // pag6 swiper
  let titleArr = ["1", "보도자료", "공지사항"]

  let sw_pag6 = new Swiper('.sw-pag6', {

    pagination: {
      el: '.pag6-pg',
      clickable: true,
      allowTouchMove: false,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">${titleArr[index + 1]}</span>
        `;


      },
    }

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