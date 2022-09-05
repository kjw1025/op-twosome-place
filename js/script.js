$(document).ready(function () {




});

window.onload = function () {

  axios
  // main ==============
    .get("data/mainslide.json")
    .then(function (result) {


      console.log("data : ", result.data);

      let mainData_coffee = result.data.coffee

      console.log(mainData_coffee);


      let tempHtml = '';
      for (i = 0; i < mainData_coffee.length; i++) {

        temp = `
          <div class="swiper-slide">
            <div class="sw-pag2-slide-wrap">
                <a href="#" class="sw-pag2-slideA" style="background: url('images/${mainData_coffee[i].link}') no-repeat center;  background-size: cover;">${mainData_coffee[i].coffee_name}</a>
            </div>
          </div>
        `;

        tempHtml += temp

      }



      document.getElementById("pag2-swMain").innerHTML = tempHtml

    })
    .catch((err) => {
      console.log("에러 발생 :", err)
    });

    axios
    // sub ==============
    .get("data/subslide.json")
    .then(function (result) {

      console.log("data : ", result.data);

      let subata_coffee = result.data.coffee

      console.log(subata_coffee);


      let tempHtml = '';
      for (i = 0; i < subata_coffee.length; i++) {

        temp = `
          <div class="swiper-slide">
            <div class="sw-pag2-slide-wrap">
                <a href="#" class="sw-pag2-slideA" style="background: url('images/${subata_coffee[i].link}') no-repeat center;  background-size: cover;">${subata_coffee[i].coffee_name}</a>
            </div>
          </div>
        `;

        tempHtml += temp

      }



      document.getElementById("pag2-swSub").innerHTML = tempHtml

    })
    .catch((err) => {
      console.log("에러 발생 :", err)
    });




  console.log(axios);



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


  // sub 슬라이더
  let sw_pag2_sub = new Swiper('.sw-pag2-sub', {
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    allowTouchMove: false,
    // watchSlidesProgress: true,

    // nav
    navigation: {
      nextEl: ".sw-pag2-next",
      prevEl: ".sw-pag2-prev",
    },

  });

  // main 슬라이더
  let sw_pag2_main = new Swiper('.sw-pag2-main', {
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    allowTouchMove: false,

    thumbs: {
      swiper: sw_pag2_sub
    },

    // nav
    navigation: {
      nextEl: ".sw-pag2-next",
      prevEl: ".sw-pag2-prev",
    },
    

  });

  sw_pag2_main.on('transitionEnd', function() {
    console.log('main now index :', sw_pag2_main.realIndex);
  });
  sw_pag2_sub.on('transitionEnd', function() {
    console.log('sub now index :', sw_pag2_sub.realIndex);
  });



  // sw_pag2_main.controller.control = sw_pag2_sub;
  // sw_pag2_sub.controller.control = sw_pag2_main;




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