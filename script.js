$(function () {
$('.ansewer').click(function(){


var $hide = $(this).find('.hide');
if ($hide.hasClass('add')) {
  $hide.removeClass('add');
  $hide.slideUp();
  $(this).find('span').html('<i class="fas fa-angle-up"></i>')
}else {
  $hide.addClass('add');
  $hide.slideDown;
  $(this).find('span').html('<i class="fas fa-angle-down"></i>')
}




})

if (window.matchMedia( "(max-width: 770px)" ).matches) {
  $('#aaa').text('資料請求');
}

})
