$(document).ready(function () {




});

window.onload = function () {


  
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


  // allmenu depth2 오픈 기능
  // let allmenuDepth1_li_a = $('.allmenu-depth-1 > li > a');
  // let allmenuDepth2 = $('.allmenu-depth-2');



  // allmenuDepth1_li_a.mouseenter(function(){
  //   allmenuDepth2.css('visibility', 'visible');
  // });

  // allmenuDepth1_li_a.mouseleave(function(){
  //   allmenuDepth2.css('visibility', 'hidden');
  // });


  // allmenu 기능
  
  let closeBt = $('.allmenu-close-bt');
  let allmenuWrap = $('.allmenu-wrap');

  // all menu 오픈기능
  allmenuBt.click(function(){
    allmenuWrap.addClass('allmenu-wrap-open');
  });

  // all menu 닫기기능
  closeBt.click(function(){
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
      el: ".swiper-pagination",
      type: "fraction",
    },
    // nav
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

















};

