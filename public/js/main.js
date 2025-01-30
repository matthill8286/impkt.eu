/* -------------------------------------------

Name: 		Ruizarch
Version:    1.0
Developer:	Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). email: miller.themes@gmail.com

------------------------------------------- */

$(function () {
  'use strict';

  /***************************

    swup

    ***************************/
  const options = {
    containers: ['#swupMain'],
    animateHistoryBrowsing: true,
    linkSelector: 'a:not([data-no-swup])',
    animationSelector: '[class="impkt-main-transition"]',
  };

  const swup = new Swup(options);

  /***************************

    register gsap plugins

    ***************************/
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  /***************************

    color variables

    ***************************/

  var accent = 'rgba(255, 152, 0, 1)';
  var dark = '#000';
  var light = '#fff';

  /***************************

    preloader
    
    ***************************/

  var timeline = gsap.timeline();

  timeline.to('.impkt-preloader-animation', {
    opacity: 1,
  });

  timeline.fromTo(
    '.impkt-animation-1 .impkt-h3',
    {
      y: '30px',
      opacity: 0,
    },
    {
      y: '0px',
      opacity: 1,
      stagger: 0.4,
    }
  );

  timeline.to(
    '.impkt-animation-1 .impkt-h3',
    {
      opacity: 0,
      y: '-30',
    },
    '+=.3'
  );

  timeline.fromTo(
    '.impkt-reveal-box',
    0.1,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      x: '-30',
    }
  );

  timeline.to(
    '.impkt-reveal-box',
    0.45,
    {
      width: '100%',
      x: 0,
    },
    '+=.1'
  );
  timeline.to('.impkt-reveal-box', {
    right: '0',
  });
  timeline.to('.impkt-reveal-box', 0.3, {
    width: '0%',
  });
  timeline.fromTo(
    '.impkt-animation-2 .impkt-h3',
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    '-=.5'
  );
  timeline.to(
    '.impkt-animation-2 .impkt-h3',
    0.6,
    {
      opacity: 0,
      y: '-30',
    },
    '+=.5'
  );
  timeline.to(
    '.impkt-preloader',
    0.8,
    {
      opacity: 0,
      ease: 'sine',
    },
    '+=.2'
  );
  timeline.fromTo(
    '.impkt-up',
    0.8,
    {
      opacity: 0,
      y: 40,
      scale: 0.98,
      ease: 'sine',
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      onComplete: function () {
        $('.impkt-preloader').addClass('impkt-hidden');
      },
    },
    '-=1'
  );
  /***************************

    anchor scroll

    ***************************/
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    var target = $($.attr(this, 'href'));
    var offset = 0;

    if ($(window).width() < 1200) {
      offset = 90;
    }

    $('html, body').animate(
      {
        scrollTop: target.offset().top - offset,
      },
      400
    );
  });
  /***************************

    append

    ***************************/
  $(document).ready(function () {
    $('.impkt-dodecahedron').clone().appendTo('.impkt-animation');
    $('.impkt-lines').clone().appendTo('.impkt-lines-place');
    $('.impkt-main-menu ul li.impkt-active > a')
      .clone()
      .appendTo('.impkt-current-page');
  });
  /***************************

    accordion

    ***************************/

  let groups = gsap.utils.toArray('.impkt-accordion-group');
  let menus = gsap.utils.toArray('.impkt-accordion-menu');
  let menuToggles = groups.map(createAnimation);

  menus.forEach((menu) => {
    menu.addEventListener('click', () => toggleMenu(menu));
  });

  function toggleMenu(clickedMenu) {
    menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
  }

  function createAnimation(element) {
    let menu = element.querySelector('.impkt-accordion-menu');
    let box = element.querySelector('.impkt-accordion-content');
    let symbol = element.querySelector('.impkt-symbol');
    let minusElement = element.querySelector('.impkt-minus');
    let plusElement = element.querySelector('.impkt-plus');

    gsap.set(box, {
      height: 'auto',
    });

    let animation = gsap
      .timeline()
      .from(box, {
        height: 0,
        duration: 0.4,
        ease: 'sine',
      })
      .from(
        minusElement,
        {
          duration: 0.4,
          autoAlpha: 0,
          ease: 'none',
        },
        0
      )
      .to(
        plusElement,
        {
          duration: 0.4,
          autoAlpha: 0,
          ease: 'none',
        },
        0
      )
      .to(
        symbol,
        {
          background: accent,
          ease: 'none',
        },
        0
      )
      .reverse();

    return function (clickedMenu) {
      if (clickedMenu === menu) {
        animation.reversed(!animation.reversed());
      } else {
        animation.reverse();
      }
    };
  }
  /***************************

    back to top

    ***************************/
  const btt = document.querySelector('.impkt-back-to-top .impkt-link');

  gsap.set(btt, {
    x: -30,
    opacity: 0,
  });

  gsap.to(btt, {
    x: 0,
    opacity: 1,
    ease: 'sine',
    scrollTrigger: {
      trigger: 'body',
      start: 'top -40%',
      end: 'top -40%',
      toggleActions: 'play none reverse none',
    },
  });
  /***************************

    cursor

    ***************************/
  const cursor = document.querySelector('.impkt-ball');

  gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50,
  });

  function movecursor(e) {
    gsap.to(cursor, {
      duration: 0.6,
      ease: 'sine',
      x: e.clientX,
      y: e.clientY,
    });
  }

  // $('.impkt-drag, .impkt-more, .impkt-choose').mouseover(function () {
  //     gsap.to($(cursor), .2, {
  //         width: 90,
  //         height: 90,
  //         opacity: 1,
  //         ease: 'sine',
  //     });
  // });
  //
  // $('.impkt-drag, .impkt-more, .impkt-choose').mouseleave(function () {
  //     gsap.to($(cursor), .2, {
  //         width: 20,
  //         height: 20,
  //         opacity: .1,
  //         ease: 'sine',
  //     });
  // });

  $('.impkt-accent-cursor').mouseover(function () {
    gsap.to($(cursor), 0.2, {
      background: accent,
      ease: 'sine',
    });
    $(cursor).addClass('impkt-accent');
  });

  $('.impkt-accent-cursor').mouseleave(function () {
    gsap.to($(cursor), 0.2, {
      background: dark,
      ease: 'sine',
    });
    $(cursor).removeClass('impkt-accent');
  });

  $('.impkt-drag').mouseover(function () {
    gsap.to($('.impkt-ball .impkt-icon-1'), 0.2, {
      scale: '1',
      ease: 'sine',
    });
  });

  $('.impkt-drag').mouseleave(function () {
    gsap.to($('.impkt-ball .impkt-icon-1'), 0.2, {
      scale: '0',
      ease: 'sine',
    });
  });

  $('.impkt-more').mouseover(function () {
    gsap.to($('.impkt-ball .impkt-more-text'), 0.2, {
      scale: '1',
      ease: 'sine',
    });
  });

  $('.impkt-more').mouseleave(function () {
    gsap.to($('.impkt-ball .impkt-more-text'), 0.2, {
      scale: '0',
      ease: 'sine',
    });
  });

  $('.impkt-choose').mouseover(function () {
    gsap.to($('.impkt-ball .impkt-choose-text'), 0.2, {
      scale: '1',
      ease: 'sine',
    });
  });

  $('.impkt-choose').mouseleave(function () {
    gsap.to($('.impkt-ball .impkt-choose-text'), 0.2, {
      scale: '0',
      ease: 'sine',
    });
  });

  $(
    'a:not(".impkt-choose , .impkt-more , .impkt-drag , .impkt-accent-cursor"), input , textarea, .impkt-accordion-menu'
  ).mouseover(function () {
    gsap.to($(cursor), 0.2, {
      scale: 0,
      ease: 'sine',
    });
    gsap.to($('.impkt-ball svg'), 0.2, {
      scale: 0,
    });
  });

  $(
    'a:not(".impkt-choose , .impkt-more , .impkt-drag , .impkt-accent-cursor"), input, textarea, .impkt-accordion-menu'
  ).mouseleave(function () {
    gsap.to($(cursor), 0.2, {
      scale: 1,
      ease: 'sine',
    });

    gsap.to($('.impkt-ball svg'), 0.2, {
      scale: 1,
    });
  });

  $('body').mousedown(function () {
    gsap.to($(cursor), 0.2, {
      scale: 0.1,
      ease: 'sine',
    });
  });
  $('body').mouseup(function () {
    gsap.to($(cursor), 0.2, {
      scale: 1,
      ease: 'sine',
    });
  });
  /***************************

     menu

    ***************************/
  $('.impkt-menu-btn').on('click', function () {
    $('.impkt-menu-btn').toggleClass('impkt-active');
    $('.impkt-menu').toggleClass('impkt-active');
    $('.impkt-menu-frame').toggleClass('impkt-active');
  });
  /***************************

    main menu

    ***************************/
  $('.impkt-menu-frame a').on('click', function () {
    $('.impkt-menu-frame').removeClass('impkt-active');
    $('.impkt-menu-frame a').removeClass('impkt-active');
    $(this).toggleClass('impkt-active');
    $(this).next().toggleClass('impkt-active');
  });

  $('.impkt-has-children a').on('click', function () {
    $('.impkt-has-children ul').removeClass('impkt-active');
    $('.impkt-has-children a').removeClass('impkt-active');
    $(this).toggleClass('impkt-active');
    $(this).next().toggleClass('impkt-active');
  });

  /***************************

    progressbar

    ***************************/
  gsap.to('.impkt-progress', {
    height: '100%',
    ease: 'sine',
    scrollTrigger: {
      scrub: 0.3,
    },
  });
  /***************************

    scroll animations

    ***************************/

  const appearance = document.querySelectorAll('.impkt-up');

  appearance.forEach((section) => {
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 40,
        scale: 0.98,
        ease: 'sine',
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: section,
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  const scaleImage = document.querySelectorAll('.impkt-scale');

  scaleImage.forEach((section) => {
    var value1 = $(section).data('value-1');
    var value2 = $(section).data('value-2');
    gsap.fromTo(
      section,
      {
        ease: 'sine',
        scale: value1,
      },
      {
        scale: value2,
        scrollTrigger: {
          trigger: section,
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  const parallaxImage = document.querySelectorAll('.impkt-parallax');

  if ($(window).width() > 960) {
    parallaxImage.forEach((section) => {
      var value1 = $(section).data('value-1');
      var value2 = $(section).data('value-2');
      gsap.fromTo(
        section,
        {
          ease: 'sine',
          y: value1,
        },
        {
          y: value2,
          scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }

  const rotate = document.querySelectorAll('.impkt-rotate');

  rotate.forEach((section) => {
    var value = $(section).data('value');
    gsap.fromTo(
      section,
      {
        ease: 'sine',
        rotate: 0,
      },
      {
        rotate: value,
        scrollTrigger: {
          trigger: section,
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
  /***************************

    fancybox

    ***************************/
  $('[data-fancybox="gallery"]').fancybox({
    buttons: ['slideShow', 'zoom', 'fullScreen', 'close'],
    loop: false,
    protect: true,
  });
  $.fancybox.defaults.hash = false;
  /***************************

    reviews slider

    ***************************/

  var menu = [
    '<div class="impkt-custom-dot impkt-slide-1"></div>',
    '<div class="impkt-custom-dot impkt-slide-2"></div>',
    '<div class="impkt-custom-dot impkt-slide-3"></div>',
    '<div class="impkt-custom-dot impkt-slide-4"></div>',
    '<div class="impkt-custom-dot impkt-slide-5"></div>',
    '<div class="impkt-custom-dot impkt-slide-6"></div>',
    '<div class="impkt-custom-dot impkt-slide-7"></div>',
  ];
  var mySwiper = new Swiper('.impkt-reviews-slider', {
    // If we need pagination
    pagination: {
      el: '.impkt-revi-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menu[index] + '</span>';
      },
    },
    speed: 800,
    effect: 'fade',
    parallax: true,
    navigation: {
      nextEl: '.impkt-revi-next',
      prevEl: '.impkt-revi-prev',
    },
  });

  /***************************

    infinite slider

    ***************************/
  var swiper = new Swiper('.impkt-infinite-show', {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 5000,
    autoplay: true,
    autoplay: {
      delay: 0,
    },
    loop: true,
    freeMode: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
    },
  });

  /***************************

    portfolio slider

    ***************************/
  var swiper = new Swiper('.impkt-portfolio-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    parallax: true,
    mousewheel: {
      enable: true,
    },
    navigation: {
      nextEl: '.impkt-portfolio-next',
      prevEl: '.impkt-portfolio-prev',
    },
    pagination: {
      el: '.swiper-portfolio-pagination',
      type: 'fraction',
    },
  });
  /***************************

    1 item slider

    ***************************/
  var swiper = new Swiper('.impkt-1-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
      nextEl: '.impkt-portfolio-next',
      prevEl: '.impkt-portfolio-prev',
    },
    pagination: {
      el: '.swiper-portfolio-pagination',
      type: 'fraction',
    },
  });
  /***************************

    2 item slider

    ***************************/
  var swiper = new Swiper('.impkt-2-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
      nextEl: '.impkt-portfolio-next',
      prevEl: '.impkt-portfolio-prev',
    },
    pagination: {
      el: '.swiper-portfolio-pagination',
      type: 'fraction',
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
    },
  });

  /*----------------------------------------------------------
    ------------------------------------------------------------

    REINIT

    ------------------------------------------------------------
    ----------------------------------------------------------*/
  document.addEventListener('swup:contentReplaced', function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      0
    );

    gsap.to('.impkt-progress', {
      height: 0,
      ease: 'sine',
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });
    /***************************

         menu

        ***************************/
    $('.impkt-menu-btn').removeClass('impkt-active');
    $('.impkt-menu').removeClass('impkt-active');
    $('.impkt-menu-frame').removeClass('impkt-active');
    /***************************

        append

        ***************************/
    $(document).ready(function () {
      $(
        '.impkt-arrow, .impkt-animation .impkt-dodecahedron, .impkt-current-page a'
      ).remove();
      $('.impkt-dodecahedron').clone().appendTo('.impkt-animation');
      $('.impkt-lines').clone().appendTo('.impkt-lines-place');
      $('.impkt-main-menu ul li.impkt-active > a')
        .clone()
        .appendTo('.impkt-current-page');
    });
    /***************************

        accordion

        ***************************/

    let groups = gsap.utils.toArray('.impkt-accordion-group');
    let menus = gsap.utils.toArray('.impkt-accordion-menu');
    let menuToggles = groups.map(createAnimation);

    menus.forEach((menu) => {
      menu.addEventListener('click', () => toggleMenu(menu));
    });

    function toggleMenu(clickedMenu) {
      menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
    }

    function createAnimation(element) {
      let menu = element.querySelector('.impkt-accordion-menu');
      let box = element.querySelector('.impkt-accordion-content');
      let symbol = element.querySelector('.impkt-symbol');
      let minusElement = element.querySelector('.impkt-minus');
      let plusElement = element.querySelector('.impkt-plus');

      gsap.set(box, {
        height: 'auto',
      });

      let animation = gsap
        .timeline()
        .from(box, {
          height: 0,
          duration: 0.4,
          ease: 'sine',
        })
        .from(
          minusElement,
          {
            duration: 0.4,
            autoAlpha: 0,
            ease: 'none',
          },
          0
        )
        .to(
          plusElement,
          {
            duration: 0.4,
            autoAlpha: 0,
            ease: 'none',
          },
          0
        )
        .to(
          symbol,
          {
            background: accent,
            ease: 'none',
          },
          0
        )
        .reverse();

      return function (clickedMenu) {
        if (clickedMenu === menu) {
          animation.reversed(!animation.reversed());
        } else {
          animation.reverse();
        }
      };
    }

    /***************************

        cursor

        ***************************/

    $('.impkt-drag, .impkt-more, .impkt-choose').mouseover(function () {
      gsap.to($(cursor), 0.2, {
        width: 90,
        height: 90,
        opacity: 1,
        ease: 'sine',
      });
    });

    $('.impkt-drag, .impkt-more, .impkt-choose').mouseleave(function () {
      gsap.to($(cursor), 0.2, {
        width: 20,
        height: 20,
        opacity: 0.1,
        ease: 'sine',
      });
    });

    $('.impkt-accent-cursor').mouseover(function () {
      gsap.to($(cursor), 0.2, {
        background: accent,
        ease: 'sine',
      });
      $(cursor).addClass('impkt-accent');
    });

    $('.impkt-accent-cursor').mouseleave(function () {
      gsap.to($(cursor), 0.2, {
        background: dark,
        ease: 'sine',
      });
      $(cursor).removeClass('impkt-accent');
    });

    $('.impkt-drag').mouseover(function () {
      gsap.to($('.impkt-ball .impkt-icon-1'), 0.2, {
        scale: '1',
        ease: 'sine',
      });
    });

    $('.impkt-drag').mouseleave(function () {
      gsap.to($('.impkt-ball .impkt-icon-1'), 0.2, {
        scale: '0',
        ease: 'sine',
      });
    });

    $('.impkt-more').mouseover(function () {
      gsap.to($('.impkt-ball .impkt-more-text'), 0.2, {
        scale: '1',
        ease: 'sine',
      });
    });

    $('.impkt-more').mouseleave(function () {
      gsap.to($('.impkt-ball .impkt-more-text'), 0.2, {
        scale: '0',
        ease: 'sine',
      });
    });

    $('.impkt-choose').mouseover(function () {
      gsap.to($('.impkt-ball .impkt-choose-text'), 0.2, {
        scale: '1',
        ease: 'sine',
      });
    });

    $('.impkt-choose').mouseleave(function () {
      gsap.to($('.impkt-ball .impkt-choose-text'), 0.2, {
        scale: '0',
        ease: 'sine',
      });
    });

    $(
      'a:not(".impkt-choose , .impkt-more , .impkt-drag , .impkt-accent-cursor"), input , textarea, .impkt-accordion-menu'
    ).mouseover(function () {
      gsap.to($(cursor), 0.2, {
        scale: 0,
        ease: 'sine',
      });
      gsap.to($('.impkt-ball svg'), 0.2, {
        scale: 0,
      });
    });

    $(
      'a:not(".impkt-choose , .impkt-more , .impkt-drag , .impkt-accent-cursor"), input, textarea, .impkt-accordion-menu'
    ).mouseleave(function () {
      gsap.to($(cursor), 0.2, {
        scale: 1,
        ease: 'sine',
      });

      gsap.to($('.impkt-ball svg'), 0.2, {
        scale: 1,
      });
    });

    $('body').mousedown(function () {
      gsap.to($(cursor), 0.2, {
        scale: 0.1,
        ease: 'sine',
      });
    });
    $('body').mouseup(function () {
      gsap.to($(cursor), 0.2, {
        scale: 1,
        ease: 'sine',
      });
    });
    /***************************

        main menu

        ***************************/
    $('.impkt-has-children a').on('click', function () {
      $('.impkt-has-children ul').removeClass('impkt-active');
      $('.impkt-has-children a').removeClass('impkt-active');
      $(this).toggleClass('impkt-active');
      $(this).next().toggleClass('impkt-active');
    });
    /***************************

        scroll animations

        ***************************/

    const appearance = document.querySelectorAll('.impkt-up');

    appearance.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 40,
          scale: 0.98,
          ease: 'sine',
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: section,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    const scaleImage = document.querySelectorAll('.impkt-scale');

    scaleImage.forEach((section) => {
      var value1 = $(section).data('value-1');
      var value2 = $(section).data('value-2');
      gsap.fromTo(
        section,
        {
          ease: 'sine',
          scale: value1,
        },
        {
          scale: value2,
          scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    const parallaxImage = document.querySelectorAll('.impkt-parallax');

    if ($(window).width() > 960) {
      parallaxImage.forEach((section) => {
        var value1 = $(section).data('value-1');
        var value2 = $(section).data('value-2');
        gsap.fromTo(
          section,
          {
            ease: 'sine',
            y: value1,
          },
          {
            y: value2,
            scrollTrigger: {
              trigger: section,
              scrub: true,
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }

    const rotate = document.querySelectorAll('.impkt-rotate');

    rotate.forEach((section) => {
      var value = $(section).data('value');
      gsap.fromTo(
        section,
        {
          ease: 'sine',
          rotate: 0,
        },
        {
          rotate: value,
          scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
    /***************************

        fancybox

        ***************************/
    $('[data-fancybox="gallery"]').fancybox({
      buttons: ['slideShow', 'zoom', 'fullScreen', 'close'],
      loop: false,
      protect: true,
    });
    $.fancybox.defaults.hash = false;
    /***************************

        reviews slider

        ***************************/

    var menu = [
      '<div class="impkt-custom-dot impkt-slide-1"></div>',
      '<div class="impkt-custom-dot impkt-slide-2"></div>',
      '<div class="impkt-custom-dot impkt-slide-3"></div>',
      '<div class="impkt-custom-dot impkt-slide-4"></div>',
      '<div class="impkt-custom-dot impkt-slide-5"></div>',
      '<div class="impkt-custom-dot impkt-slide-6"></div>',
      '<div class="impkt-custom-dot impkt-slide-7"></div>',
    ];
    var mySwiper = new Swiper('.impkt-reviews-slider', {
      // If we need pagination
      pagination: {
        el: '.impkt-revi-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + menu[index] + '</span>';
        },
      },
      speed: 800,
      effect: 'fade',
      parallax: true,
      navigation: {
        nextEl: '.impkt-revi-next',
        prevEl: '.impkt-revi-prev',
      },
    });

    /***************************

        infinite slider

        ***************************/
    var swiper = new Swiper('.impkt-infinite-show', {
      slidesPerView: 2,
      spaceBetween: 30,
      speed: 5000,
      autoplay: true,
      autoplay: {
        delay: 0,
      },
      loop: true,
      freeMode: true,
      breakpoints: {
        992: {
          slidesPerView: 4,
        },
      },
    });

    /***************************

        portfolio slider

        ***************************/
    var swiper = new Swiper('.impkt-portfolio-slider', {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      parallax: true,
      mousewheel: {
        enable: true,
      },
      navigation: {
        nextEl: '.impkt-portfolio-next',
        prevEl: '.impkt-portfolio-prev',
      },
      pagination: {
        el: '.swiper-portfolio-pagination',
        type: 'fraction',
      },
    });
    /***************************

        1 item slider

        ***************************/
    var swiper = new Swiper('.impkt-1-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      parallax: true,
      navigation: {
        nextEl: '.impkt-portfolio-next',
        prevEl: '.impkt-portfolio-prev',
      },
      pagination: {
        el: '.swiper-portfolio-pagination',
        type: 'fraction',
      },
    });
    /***************************

        2 item slider

        ***************************/
    var swiper = new Swiper('.impkt-2-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      parallax: true,
      navigation: {
        nextEl: '.impkt-portfolio-next',
        prevEl: '.impkt-portfolio-prev',
      },
      pagination: {
        el: '.swiper-portfolio-pagination',
        type: 'fraction',
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
        },
      },
    });
  });
});
