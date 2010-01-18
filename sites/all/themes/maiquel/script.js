$(function(){
	$('a#linkedin').click(function(){
		try{pageTracker._trackPageview('/link-linkedin'); }catch(err){};
	});
	$('a#spree').click(function(){
		try{pageTracker._trackPageview('/link-spree'); }catch(err){};
	});
	$('a#twitter').click(function(){
		try{pageTracker._trackPageview('/link-twitter'); }catch(err){};
	});
	$('a#email').click(function(){
		try{pageTracker._trackPageview('/link-email'); }catch(err){};
	});
});
