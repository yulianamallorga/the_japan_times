$('.back-to-top').on('click',function(){
	$('body').scrollTop(0);
});

$('#menu').on('click', function(){
	$('body').toggleClass('menu-opened');
});