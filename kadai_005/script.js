$(function(){
  // ボタンアニメーション
  $('.button-more').on('mouseover',function(){
    $(this).animate({
      opacity : 0.5,
      marginLeft : 20,
    },100);
  });
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });
  $('.button-more').on('mouseout',function(){
    $(this).animate({
      marginLeft : 0,
      opacity : 1.0,
    },100);
  });
});