$(function () {
  if ($.adblock) {
    $.confirm({
      'title': 'You Are Using AdBlock or some other advert blocking software!',
      'message': 'modification-blog.blogspot.com relies on advertising for revenue. Any small support from you would help us a lot to making this site lives longer and works better.<br/>\
									Please add modification-blog.blogspot.com to your ad blocking whitelist or disable ad blocking or use another browser without any adblocker when you visit modification-blog.blogspot.com<br/>\
									Thanks & Enjoy',
      'buttons': {
        'Yes, I Agree': {
          'class': 'flat',
          'action': function () {
            // window.location = 'http://google.com/';
            // window.open('http://google.com/','_blank');
            window.location.reload(true);
          }
        }
      }
    });
  }
});