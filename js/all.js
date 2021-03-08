$(document).ready(function(){
    //下拉選單
    $('.nav-list-product a').click(function (e) { 
      e.preventDefault();
      $(this).parent().find('ul').slideToggle(700);
    });

    //swipper 效果
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        //自動輪播
        autoplay: {
          delay: 3000,
        },
      });

      //燈箱效果
      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        
      })
      
      //top 效果
      

      $(window).scroll(function(){

        if($(this).scrollTop() > 60){
        
        $('.top a').fadeIn();
        
        } 
        else{
        $('.top a').fadeOut();
        }
      });

      $('.top a').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 700);
      });
});