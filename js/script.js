jQuery(function ($) {
      $(function () {
        $('a[href^="#"]').click(function () {
          var speed = 1000;
          var href = $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          if ($('#menu-switch').is(':checked')) { //全選択・全解除がcheckedだったら
            $('#menu-switch').prop('checked', false); //アイテムを全部checkedにする
          }
          $("html, body").animate({
            scrollTop: position
          }, speed, "swing");
          return false;
        });
      });