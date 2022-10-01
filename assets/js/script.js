$(function() {
    // ヘッダー下部の入り込み回避
    var headerHeight = $(".header-wrapper").height();
    $("body").css("margin-top", headerHeight);

    // スクロール
    var navHeight = $(".header-wrapper").outerHeight();
    $('a[href^="#"]').on("click", function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top - navHeight;
      $("html, body").animate({ scrollTop: position, }, 600, "swing");
      return false;
    });
  
    $("#js-page-top").on("click", function () {
      $("body,html").animate({ scrollTop: 0, }, 600);
      return false;
    });

    $('#scroll_back a').on('click',function(event){
        $('body, html').animate({
        scrollTop: 0
    }, 600);
        event.preventDefault();
    });

    // メニューバー
    $(".openbtn1").click(function () {
        $(this).toggleClass('active');
        $('.header-right').toggleClass('active');
    });

    // モーダルウインドウ
    $('.modal-open').on('click', function() {
      const modal_id = 'modal-' + $(this).attr('id');
      $('#' + modal_id).addClass('active');
      console.log(modal_id);
    });

    $('.modal-close').on('click', function() {
      const modal_id = $(this).parents('.modal-wrapper').attr('id');
      $('#' + modal_id).removeClass('active');
      console.log(modal_id);
    });

});