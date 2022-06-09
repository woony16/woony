var $subMenubg;
  	var $mainMenu;
  	var $subMenu;
  	var $mainMenuLi;
  	var clickNum
  	$(document).ready(function(){
  		$subMenu=$(".submenu_list");
  		$subMenubg=$("#submenubg");
  		$mainMenu=$(".mainmenu_list>li>a");
  		$mainMenuLi=$(".mainmenu_list>li");
  		
  		$mainMenuLi.css("background","none")
  		$subMenubg.hide()
  		$subMenu.hide()
  		
  		$mainMenuLi.bind("mouseenter",onMenuenter)
  		$mainMenuLi.bind("mouseleave",onMenuOut)
  	})
  	
  	function onMenuenter(){
  		$(this).children().css("color","#f87c22");
  		$(this).css({"background":"url('/guksin/images/menu_click.jpg') no-repeat center","background-position-y":"40px"})
  		
  		
  		$subMenubg.show()  		
  		$(this).children(".submenu_list").show() 	
  		
  	}
  	function onMenuOut(){
  		$mainMenu.css("color","#474747")
  		$subMenubg.hide()
  		$subMenu.hide()
  		$mainMenuLi.css("background","none")
  	}