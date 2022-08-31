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
      el: ".swiper-pagination",
      type: "fraction",
    },
    // nav
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
  });



  // pag2 slide

  let sw_pag2 = new Swiper('.sw-pag2', {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,

    // nav
    navigation: {
      nextEl: ".sw-pag2-next",
      prevEl: ".sw-pag2-prev",
    },

  });



  // 강제 swiper-slide 크기 조정
  // let pag2A = $('.sw-pag2-slideA');
  // let pag2A_ba = $('.sw-pag2').find('.swiper-slide');
  // let pag2A_active = $('.sw-pag2').find('.swiper-slide-active');

  // console.log(pag2A_ba);
  // console.log(pag2A_active);

  // function myfnfn1(el) {
  //   el.css('width', '176px');
  //   console.log('1');
  // }

  // function myfnfn2(el) {
  //   el.css('width', '488px');
  //   console.log('2');
  // }
  // myfnfn1(pag2A_ba);
  // myfnfn2(pag2A_active);


  // 데이터 
  let slideData = [
    {
      goodname: "스페니쉬",
      img: url('')
    }, 
    {
      goodname: "롱블랙",
      img: url('')
    }, 
    {
      goodname: "허니레몬티",
      img: url('')
    },
    {
      goodname: "스피치",
      img: url('')
    }
  ];













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