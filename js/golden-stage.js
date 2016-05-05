$(document).ready(function () {
  /** Document Ready Functions **/
  /********************************************************************/
  // Resive video

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

  $('.fullImage1').on('shown.bs.modal', function () {
    $('.your-book1').slick({
      initialSlide: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev_page1'),
      nextArrow: $('.next_page1')
    });
  });

  $('.fullImage2').on('shown.bs.modal', function () {
    $('.your-book2').slick({
      initialSlide: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev_page2'),
      nextArrow: $('.next_page2')
    });
  });

  $('.fullImage3').on('shown.bs.modal', function () {
    $('.your-book3').slick({
      initialSlide: 2,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev_page3'),
      nextArrow: $('.next_page3')
    });
  });

  $('.fullImage4').on('shown.bs.modal', function () {
    $('.your-book4').slick({
      initialSlide: 3,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev_page4'),
      nextArrow: $('.next_page4')
    });
  });

  $('.fullImage-mobile1').on('shown.bs.modal', function () {
    $('.your-mobile-book1').slick({
      initialSlide: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev-mobile-book1'),
      nextArrow: $('.next-mobile-book1')
    });
  });

  $('.fullImage-mobile2').on('shown.bs.modal', function () {
    $('.your-mobile-book2').slick({
      initialSlide: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev-mobile-book2'),
      nextArrow: $('.next-mobile-book2')
    });
  });

  $('.fullImage-mobile3').on('shown.bs.modal', function () {
    $('.your-mobile-book3').slick({
      initialSlide: 2,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev-mobile-book3'),
      nextArrow: $('.next-mobile-book3')
    });
  });

  $('.fullImage-mobile4').on('shown.bs.modal', function () {
    $('.your-mobile-book4').slick({
      initialSlide: 3,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev-mobile-book4'),
      nextArrow: $('.next-mobile-book4')
    });
  });

  $('.fullImage-mobile5').on('shown.bs.modal', function () {
    $('.your-mobile-book5').slick({
      initialSlide: 4,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev-mobile-book5'),
      nextArrow: $('.next-mobile-book5')
    });
  });

  $('.fullImage-mobile6').on('shown.bs.modal', function () {
    $('.your-mobile-book6').slick({
      initialSlide: 5,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev-mobile-book6'),
      nextArrow: $('.next-mobile-book6')
    });
  });

  $('.fullImage-mobile7').on('shown.bs.modal', function () {
    $('.your-mobile-book7').slick({
      initialSlide: 6,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev-mobile-book7'),
      nextArrow: $('.next-mobile-book7')
    });
  });

  $('.fullImage-mobile8').on('shown.bs.modal', function () {
    $('.your-mobile-book8').slick({
      initialSlide: 7,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev-mobile-book8'),
      nextArrow: $('.next-mobile-book8')
    });
  });

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
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
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

  $('#viewAndShare').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var type = button.data('type'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    var text1 = 'Trẻ từ 1-3 tuổi là giai đoạn phát triển vượt bậc về thể chất, trí não và nhận thức. Nếu ba mẹ biết cách ' +
      'vun đắp cho con trong "Giai đoạn vàng", chúng ta hoàn toàn có thể cho bé một nền tảng phát triển thể chất trí tuệ tốt. ' +
      'Nếu chúng ta bỏ lỡ cơ hội này, thì có nỗ lực đến đâu cũng khó có thể bù đắp được.';
    var text2 = 'Trẻ từ 1-3 tuổi có chỉ số cân nặng phát triển chậm, ba mẹ thường bỏ qua và không theo dõi chặt chẽ ' +
      'sự phát triển của con. Chậm tăng cân kéo dài có thể dẫn đến suy dinh dưỡng, thấp còi. Trẻ bị suy dinh dưỡng, thấp còi, ' +
      'đặc biệt là trong "Giai đoạn vàng" khó có thể cải thiện, ảnh hưởng nghiêm trọng đến sức khỏe, trí tuệ, và tương lai trẻ.';
    var text3 = 'Giai đoạn vàng không những thời điểm trẻ dễ dàng và nhanh chóng hấp thu dinh dưỡng nhất mà còn là bước ' +
      'đầu tiên trẻ tiếp xúc với thế giới xung quanh.' + '<br>' + 'Mẹ hãy có chế độ chăm sóc dinh dưỡng tích cực để trẻ ' +
      'phát triển toàn diện.';
    var text4 = 'Giai đoạn 1 - 3 tuổi là thời điểm bé bắt đầu khám phá thế giới, và cũng là giai đoạn thay đổi trong chế độ ' +
      'dinh dưỡng của trẻ. Để có thể phát triển khỏe mạnh, trẻ cần được mẹ quan tâm, chăm sóc, với nguồn dinh dưỡng tối ưu. ' +
      'Chỉ số về cân nặng và chiều cao phản ánh sự tăng trưởng của con, mẹ đừng bỏ qua nhé.';
    var text5 = 'Suy dinh dưỡng bản thân nó đã khó cải thiện nếu mẹ không có chế độ dinh dưỡng đúng cách, đặc biệt là trong ' +
      '"Giai đoạn vàng". Ngay từ bây giờ, mẹ hãy tìm hiểu và áp dụng những chăm sóc dinh dưỡng khoa học, đúng cách và ' +
      'hiệu quả để giúp con bước qua giai đoạn vàng với sự phát triển hoàn thiện.';
    var text6 = 'GrowPLUS+ của NutiFood với công thức Weight Pro+, giúp trẻ tăng cân, tăng chiều cao tốt, giúp giảm tình trạng ' +
      'biếng ăn, và phòng tránh suy dinh dưỡng, thấp còi trong "Giai đoạn vàng".';
    if (type == 1) {
      modal.find('.header-heading img').attr('src', 'images/golden-stage/text-1.png');
      modal.find('.header-text').html(text1);
    } else if (type == 2) {
      modal.find('.header-heading img').attr('src', 'images/golden-stage/text-2.png');
      modal.find('.header-text').html(text2);
    } else if (type == 3) {
      modal.find('.header-heading img').attr('src', 'images/golden-stage/text-3.png');
      modal.find('.header-text').html(text3);
    } else if (type == 4) {
      modal.find('.header-heading img').attr('src', 'images/golden-stage/text-4.png');
      modal.find('.header-text').html(text4);
    } else if (type == 5) {
      modal.find('.header-heading img').attr('src', 'images/golden-stage/text-5.png');
      modal.find('.header-text').html(text5);
    } else {
      modal.find('.header-heading img').attr('src', 'images/golden-stage/text-6.png');
      modal.find('.header-text').html(text6);
    }

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
