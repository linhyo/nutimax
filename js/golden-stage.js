$(document).ready(function () {
  /** Document Ready Functions **/
  /********************************************************************/
  // Resive video
  scaleVideoContainer();

  initBannerVideoSize('.video-container .poster img');
  initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');

  $(window).on('resize', function () {
    scaleVideoContainer();
    scaleBannerVideoSize('.video-container .poster img');
    scaleBannerVideoSize('.video-container .filter');
    scaleBannerVideoSize('.video-container video');
  });


  /** Reusable Functions **/
  /********************************************************************/

  function scaleVideoContainer() {

    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height', unitHeight);

  }

  function initBannerVideoSize(element) {

    $(element).each(function () {
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

  }

  function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      videoWidth,
      videoHeight;

    $(element).each(function () {
      var videoAspectRatio = $(this).data('height') / $(this).data('width'),
        windowAspectRatio = windowHeight / windowWidth;

      if (videoAspectRatio > windowAspectRatio) {
        videoWidth = windowWidth + 20;
        videoHeight = videoWidth * videoAspectRatio;
      } else {
        videoHeight = windowHeight + 20;
        videoWidth = videoHeight / videoAspectRatio;
        $(this).css({'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px'});
      }

      $(this).width(videoWidth).height(videoHeight);

      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');


    });
  }

  var wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  );
  wow.init();

  $('#bookMobile').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev_page_button'),
    nextArrow: $('.next_page_button'),
    responsive: [
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
});

$(function () {
  var $mybook = $('#mybook');
  var $bttn_next = $('#next_page_button');
  var $bttn_prev = $('#prev_page_button');
  var $mybook_images = $mybook.find('img');
  var cnt_images = $mybook_images.length;
  var loaded = 0;
  //preload all the images in the book,
  //and then call the booklet plugin

  $mybook_images.each(function () {
    var $img = $(this);
    var source = $img.attr('src');
    $('<img/>').load(function () {
      ++loaded;
      if (loaded == cnt_images) {
        $bttn_next.show();
        $bttn_prev.show();
        $mybook.show().booklet({
          name: null,                            // name of the booklet to display in the document title bar
          width: 860,                             // container width
          height: 554,                             // container height
          speed: 600,                             // speed of the transition between pages
          direction: 'LTR',                           // direction of the overall content organization, default LTR, left to right, can be RTL for languages which read right to left
          startingPage: 1,                               // index of the first page to be displayed
          easing: 'easeInOutQuad',                 // easing method for complete transition
          easeIn: 'easeInQuad',                    // easing method for first half of transition
          easeOut: 'easeOutQuad',                   // easing method for second half of transition

          closed: true,                           // start with the book "closed", will add empty pages to beginning and end of book
          closedFrontTitle: null,                            // used with "closed", "menu" and "pageSelector", determines title of blank starting page
          closedFrontChapter: null,                            // used with "closed", "menu" and "chapterSelector", determines chapter name of blank starting page
          closedBackTitle: null,                            // used with "closed", "menu" and "pageSelector", determines chapter name of blank ending page
          closedBackChapter: null,                            // used with "closed", "menu" and "chapterSelector", determines chapter name of blank ending page
          covers: false,                           // used with  "closed", makes first and last pages into covers, without page numbers (if enabled)

          pagePadding: 0,                              // padding for each page wrapper
          pageNumbers: false,                            // display page numbers on each page

          hovers: false,                            // enables preview pageturn hover animation, shows a small preview of previous or next page on hover
          overlays: false,                            // enables navigation using a page sized overlay, when enabled links inside the content will not be clickable
          tabs: false,                           // adds tabs along the top of the pages
          tabWidth: 435,                              // set the width of the tabs
          tabHeight: 555,                              // set the height of the tabs
          arrows: false,                           // adds arrows overlayed over the book edges
          cursor: 'pointer',                       // cursor css setting for side bar areas

          hash: false,                           // enables navigation using a hash string, ex: #/page/1 for page 1, will affect all booklets with 'hash' enabled
          keyboard: true,                            // enables navigation with arrow keys (left: previous, right: next)
          next: $bttn_next,          			// selector for element to use as click trigger for next page
          prev: $bttn_prev,          			// selector for element to use as click trigger for previous page

          menu: null,                            // selector for element to use as the menu area, required for 'pageSelector'
          pageSelector: false,                           // enables navigation with a dropdown menu of pages, requires 'menu'
          chapterSelector: false,                           // enables navigation with a dropdown menu of chapters, determined by the "rel" attribute, requires 'menu'

          shadows: false,                            // display shadows on page animations
          shadowTopFwdWidth: 0,                             // shadow width for top forward anim
          shadowTopBackWidth: 0,                             // shadow width for top back anim
          shadowBtmWidth: 0,                              // shadow width for bottom shadow

          before: function () {
          },                    // callback invoked before each page turn animation
          after: function () {
          }                     // callback invoked after each page turn animation
        });
      }
    }).attr('src', source);
  });


  var wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  );
  wow.init();

});
