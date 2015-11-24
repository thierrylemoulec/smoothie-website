(function() {
  $(function() {
    return $('.button').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('is-active');
      if (!$(this).hasClass('is-active')) {
        $('.header-name h1').velocity({
          translateY: "0%"
        }, {
          duration: 150
        });
        $('.logo').velocity({
          translateY: 0,
          scale: 1
        }, 650, [500, 20]);
        return $('.main h2').velocity({
          translateY: "0%",
          opacity: 1
        }, {
          duration: 150
        });
      } else {
        $('.header-name h1').velocity({
          translateY: "-100%"
        }, {
          duration: 250
        });
        $('.logo').velocity({
          translateY: -70,
          scale: .54
        }, 550, [500, 20]);
        $('.main h2').velocity({
          translateY: "-130%",
          opacity: 0
        }, {
          duration: 150
        });
        return $('.form').css({
          'display': "block",
          position: 'absolute'
        }).velocity({
          top: "-100%",
          opacity: 1
        }, {
          duration: 120
        });
      }
    });
  });

}).call(this);
