/**
 * @name		jQuery blockBlock plugin
 * @description		A simple experiment in detecting adblockers with JavaScript
 * @author		Martin Angelov
 * @version		1.0
 * @url			http://tutorialzine.com/
 * @modify		Hendriono 
 * @url			http://modification-blog.blogspot.com/
 * @license		MIT License
 */ (function ($) {
  $.confirm = function (params) {
    if ($('#confirmOverlay').length) {
      return false;
    }
    var buttonHTML = '';
    $.each(params.buttons, function (name, obj) {
      buttonHTML += '<a href="#" class="button ' + obj['class'] + '"><span>' + name + '</span></a>';
      if (!obj.action) {
        obj.action = function () {};
      }
    });
    var markup = [
        '<div id="confirmOverlay">',
        '<div id="confirmBox">',
        '<h1>', params.title, '</h1>',
        '<p>', params.message, '</p>',
        '<div id="confirmButtons">',
      buttonHTML,
        '</div></div></div>'
    ].join('');
    $(markup).hide().appendTo('body').fadeIn();
    var buttons = $('#confirmBox .button'),
      i = 0;
    $.each(params.buttons, function (name, obj) {
      buttons.eq(i++).click(function () {
        obj.action();
        $.confirm.hide();
        return false;
      });
    });
    $(window).resize(function () {
      $('#confirmBox').css({
        position: 'fixed',
        left: ($(window).width() - $('#confirmBox').outerWidth()) / 2,
        top: ($(window).height() - $('#confirmBox').outerHeight()) / 2
      });
    });
    $(window).resize();
  }
  $.confirm.hide = function () {
    $('#confirmOverlay').fadeOut(function () {
      $(this).remove();
    });
  }
  if ($.adblock === undefined) {
    $.adblock = true;
  }
  $.fn.showOnAdBlock = function () {

    if ($.adblock) {
      this.show();
    }
    return this;
  }
})(jQuery);