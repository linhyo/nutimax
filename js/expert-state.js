String.prototype.format = function () {
  var args = arguments;
  return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
    if (m == "{{") {
      return "{";
    }
    if (m == "}}") {
      return "}";
    }
    return args[n] ? args[n] : "";
  });
};
var globalBMIText= "";
var template = '';
template += '<div class="container wow fadeInDown" data-wow-duration="1s">';
template += '<div class="step-value">';
template += '  <div class="detail-value {0}">';
template += '  <div class="detail-people">';
template += '  <h2 class="detail-title">THÔNG TIN BMI</h2>';
template += '  <p class="detail-content">Trạng thái: {6} </p>';
template += '</div>';
template += '<a class="cmd-view-detail" href="#">Xem chi tiết kết quả</a>';
template += '</div>';
template += '  <div class="value">';
template += '    <img src="{1}" alt=""/>';
template += '  </div>';
template += '  <div class="value">';
template += '    <img src="{2}" alt=""/>';
template += '  </div>';
template += '  <div class="value {0}">';
template += '    <img src="{3}" alt=""/>';
template += '  </div>';
template += '  <div class="value">';
template += '    <img src="{4}" alt=""/>';
template += '  </div>';
template += '  <div class="value">';
template += '    <img src="{5}" alt=""/>';
template += '  </div>';
template += '  </div>';
template += '  </div>';
template += '  <div class="step-dot">';
template += '  <div class="container">';
template += '  <div class="dot-value">';
template += '  <span class="dot"></span>';
template += '  </div>';
template += '  <div class="dot-value">';
template += '  <span class="dot"></span>';
template += '  </div>';
template += '  <div class="dot-value">';
template += '  <span class="dot {0}"></span>';
template += '  </div>';
template += '  <div class="dot-value">';
template += '  <span class="dot"></span>';
template += '  </div>';
template += '  <div class="dot-value">';
template += '  <span class="dot"></span>';
template += '  </div>';
template += '  </div>';
template += '  </div>';
var domain = "http://www.nutifood.com.vn/suy-dinh-duong/web/frontend/campaign04/";
var statusValue = [
  {
    id: 1,
    img: domain+'images/expert-state/value1.png'
  },
  {
    id: 2,
    img: domain+'images/expert-state/value2.png'
  },
  {
    id: 3,
    img: domain+'images/expert-state/value3.png'
  },
  {
    id: 4,
    img: domain+'images/expert-state/value4.png'
  },
  {
    id: 5,
    img: domain+'images/expert-state/value5.png'
  }
];

var activeBMIStatus = function(status){
  var isActive = '';
  var blockContent = $('.step3');
  console.log(globalBMIText);
  if(status === 0){
    blockContent.removeClass('active').html('');
    blockContent.html('');
    isActive = '';
    var nullValue = template.format(isActive, statusValue[0].img, statusValue[1].img, statusValue[2].img, statusValue[3].img, statusValue[4].img,globalBMIText);
    blockContent.append(nullValue);
    $(".step-value .detail-value").removeClass("active");
  }else{
    isActive = 'active';
    blockContent.html('').addClass('active');
    var wrapperValue = '';
    if(status === 1){
      wrapperValue = template.format(isActive, statusValue[3].img, statusValue[4].img, statusValue[0].img, statusValue[1].img, statusValue[2].img,globalBMIText);
      blockContent.append(wrapperValue);
    }
    if(status === 2){
      wrapperValue = template.format(isActive, statusValue[4].img, statusValue[0].img, statusValue[1].img, statusValue[2].img, statusValue[3].img,globalBMIText);
      blockContent.append(wrapperValue);
    }
    if(status === 3){
      wrapperValue = template.format(isActive, statusValue[0].img, statusValue[1].img, statusValue[2].img, statusValue[3].img, statusValue[4].img,globalBMIText);
      blockContent.append(wrapperValue);
    }
    if(status === 4){
      wrapperValue = template.format(isActive, statusValue[1].img, statusValue[2].img, statusValue[3].img, statusValue[4].img, statusValue[0].img,globalBMIText);
      blockContent.append(wrapperValue);
    }
    if(status == 5){
      wrapperValue = template.format(isActive, statusValue[2].img, statusValue[3].img, statusValue[4].img, statusValue[0].img, statusValue[1].img,globalBMIText);
      blockContent.append(wrapperValue).fadeIn(1000);
    }
  }

  $(".cmd-view-detail").click(function(event){
    event.preventDefault();
    $("#bmi-result-box").modal("show");
  });
};

activeBMIStatus(0);

$('.submit-check-form').on('click', function(e){
  e.preventDefault();
  activeBMIStatus(1);
});
