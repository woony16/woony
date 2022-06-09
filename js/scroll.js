
var scrollTop;


$(window).load(function(){
	
	
	$(window).bind("scroll", onScroll)
	
	

	
	
	
	
});


function onScroll(){
  
  scrollTop=$(document).scrollTop()
  
  if(scrollTop>=500 && scrollTop<=530){
    
    skillDataCount()
    
  }
  
  
  /*
  if(windowWidth>=1030 && windowWidth<=1400 && scrollTop<=1600){
      skillDataCount();
    }else if(windowWidth<=1030 && scrollTop>=1660){
      skillDataCount();
    }else if(windowWidth>=1400 && scrollTop>=1700 && scrollTop<=1800){
      skillDataCount();
    }
   */  
  
}


  function skillDataCount(){
        $('#skillSet li').each(function() {
            var dataCount=$(this).attr('data-count');
            // alert(dataCount);
            $(this).circleProgress({
                value: dataCount*0.01
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(dataCount * progress) + '<i>%</i>');
            });
        });
  }
    
    
    
    

   
    

   
    

    
    

    
    

   
	

  
	

   
	
	
  
	

    
	
	
	
function onSkillCount(){
    $('.txtPercent').each(function() {
      var $this = $(this), countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },{
        duration: 2000,
        easing:'easeOutCubic',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
      });
    });
}