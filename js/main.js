$(function(){
    $(".lazy").slick({
       lazyLoad: 'ondemand', // ondemand progressive anticipated
       infinite: true, 
       arrows : true, 
       dots : true,
       autoplay : true,
       autoplaySpeed : 3000, 
       pauseOnHover : true, //마우스를 올려두면 동작 일시정지
     });//lazy slick

     $(".notice_list, .local, .weather_list, .weather_ico").slick({
       vertical: true,
       infinite: true, 
       arrows : false, 
       dots : false,
       autoplay : true,
       autoplaySpeed : 1000, 
       pauseOnHover : true, //마우스를 올려두면 동작 일시정지
   })//공지사항 자동올림

//서브슬라이더 슬릭
     $('.slider-for').slick({
       lazyLoad: 'ondemand',
       infinite: true, 
       arrows: false,
       dots: false,
       fade: true,
       autoplay : true,
       autoplaySpeed : 3000,
       asNavFor: '.slider-nav'
       });
       $('.slider-nav').slick({
       lazyLoad: 'ondemand',
       infinite: true, 
       asNavFor: '.slider-for',
       dots: true,
       arrows: true,
       focusOnSelect: true
       });

// 하단배너 슬릭
       $('.single-item').slick({
           infinite: true,
           fade: true,
           autoplay : true,
           dots: true,
           arrows: false,
       });

       $('.multiple-items').slick({
       infinite: true,
       slidesToShow: 4,
       slidesToScroll: 2,
       });

//사이트맵, 언어 클릭 

var sta_lang = 0
  $('#header .head_btn .lang').click(function(){
    if (sta_lang  == 0){
      $('#header .head_btn .lang ul').slideDown();
      $('#header .head_btn .lang img').attr('src','images_icon/ic_language2_on.png');
      sta_lang  = 1 
      }else{
      $('#header .head_btn .lang ul').slideUp();
      $('#header .head_btn .lang img').attr('src','images_icon/ic_language2_off.png')
      sta_lang  = 0 
    }
  })//click
  
  var sta_site = 0;
  // alert(src_off+src_on)
  $('#header .head_btn .site_map').click(function(){
    if(sta_site == 0){
    $('#header .pop_up').css({display:'block'});
    $('#header .site_map img').attr('src','images_icon/ic_sitemap_on.png');
    sta_site = 1
    }else{
      $('#header .pop_up').css({display:'none'});
      $('#header .head_btn .site_map img').attr('src','images_icon/ic_sitemap_off.png');
    sta_site = 0 
   }
  })//click02
})//ready