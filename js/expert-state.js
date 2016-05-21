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

var template = '';
template += '<div class="container">';
template += '<div class="step-value">';
template += '  <div class="detail-value {0}">';
template += '  <div class="detail-people">';
template += '  <h2 class="detail-title">BMI: 23</h2>';
template += '  <p class="detail-content">Tình trạng: Thiếu cân độ 1</p>';
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

var statusValue = [
  {
    id: 1,
    img: 'images/expert-state/value1.png'
  },
  {
    id: 2,
    img: 'images/expert-state/value2.png'
  },
  {
    id: 3,
    img: 'images/expert-state/value3.png'
  },
  {
    id: 4,
    img: 'images/expert-state/value4.png'
  },
  {
    id: 5,
    img: 'images/expert-state/value5.png'
  }
];

var activeBMIStatus = function(status){
  var isActive = '';
  var blockContent = $('.step3');
  if(status === 0){
    blockContent.removeClass('active').html('');
    var nullValue = template.format(isActive, statusValue[0].img, statusValue[1].img, statusValue[2].img, statusValue[3].img, statusValue[4].img);
    blockContent.append(nullValue);
  }else{
    isActive = 'active';
    blockContent.html('');
    var wrapperValue = '';
    if(status === 1){
      wrapperValue = template.format(isActive, statusValue[3].img, statusValue[4].img, statusValue[0].img, statusValue[1].img, statusValue[2].img);
      blockContent.append(wrapperValue);
    }
    if(status === 2){
      wrapperValue = template.format(isActive, statusValue[4].img, statusValue[0].img, statusValue[1].img, statusValue[2].img, statusValue[3].img);
      blockContent.append(wrapperValue);
    }
    if(status === 3){
      wrapperValue = template.format(isActive, statusValue[0].img, statusValue[1].img, statusValue[2].img, statusValue[3].img, statusValue[4].img);
      blockContent.append(wrapperValue);
    }
    if(status === 4){
      wrapperValue = template.format(isActive, statusValue[1].img, statusValue[2].img, statusValue[3].img, statusValue[4].img, statusValue[0].img);
      blockContent.append(wrapperValue);
    }
    if(status == 5){
      wrapperValue = template.format(isActive, statusValue[2].img, statusValue[3].img, statusValue[4].img, statusValue[0].img, statusValue[1].img);
      blockContent.append(wrapperValue);
    }
  }
};

activeBMIStatus(0);