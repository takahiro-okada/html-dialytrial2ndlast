$(function () {

  // drawer.js
  $('.drawer').drawer();
  
    // smoothscroll	
  // #から始まるURLがクリックされた時	
  $('a[href^="#"]').click(function () {	
    // .headerクラスがついた要素の高さを取得	
    let header = jQuery(".header").innerHeight();	
    let speed = 300;	
    let id = jQuery(this).attr("href");	
    let target = jQuery("#" == id ? "html" : id);	
    // トップからの距離からヘッダー分の高さを引く	
    let position = jQuery(target).offset().top - header;	
    // その分だけ移動すればヘッダーと被りません	
    jQuery("html, body").animate(	
      {	
        scrollTop: position - $('js- header').outerHeight()	
      },	
      speed	
    );	
    return false;	
  });


  // スワイパー
  var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 40,
    centerSlids : true,
    loop: true,
    width: 420,
    slidesPerView: 2.5,
    loopedSlides: 6,
    pagination: '.swiper-pagination',
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 24,
      }
    },
  })

  // faq
  $('.js-faq').on('click', function () {
    $(this).find('.js-faqA').stop().slideToggle(300);
    $(this).toggleClass('add-active');
  });
});

// form validation
(function () {
  var requireFlg = false;
  var privacyFlg = false;
  var $require = $('#js-contact-form .js-require');
  var fillCount = 0;

  function setSubmitProp() {
    if (requireFlg && privacyFlg) {
      $('#form-submit').prop('disabled', false);
    } else {
      $('#form-submit').prop('disabled', true);
    }
  }

  // googleForm
  let $form = $('#js-form')
  $form.submit(function (e) {
    $.ajax({
      url: $form.attr('action'),
      data: $form.serialize(),
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          //送信に成功したときの処理 
          $form.slideUp()
          $('#js-success').slideDown()
        },
        200: function () {
          //送信に失敗したときの処理
          $form.slideUp()
          $('#js-error').slideDown()
        }
      }
    });
    return false;
  });

  // formの入力確認
  let $submit = $('#js-submit')
  $('#js-form input, #js-form textarea').on('change', function () {
    if (
      $('#js-form input[type="text"]').val() !== "" && //空ではない
      $('#js-form input[type="email"]').val() !== "" && //空ではない
      $('#js-form input[name="entry.456916346"]').prop('checked') === true //チェックされていれば
    ) {
      $submit.prop( 'disabled', false)
      $submit.addClass('-active')
    } else {
      $submit.prop( 'disabled', true)
      $submit.removeClass('-active')
    }
  })
});
