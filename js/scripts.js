$( document ).ready(function() {

	$('.arhiv').hide();
	$('.arhiv-toggle').click(function(){
		$('.arhiv').toggle();
	});

    var colors = [
    '#0DB0E3',
    '#C5D979',
    '#EB352C',
    '#F8D108',
    '#788BA9',
    '#F38C8A',
    '#455EA0',
    '#7D8FAB'
    ];

$('.box').each(function(){
	$ranCol = colors[Math.floor(Math.random() * colors.length)];

	$(this).css("border-color", $ranCol);
	$(this).find("h3").css("border-color", $ranCol);

	//TODO assign random corner classes


	// design the corners
	if($(this).hasClass("corner-tl")){
		$(this).css("border-color", "#C5D979");
		$(this).find("h3").css("border-color", "#C5D979");
	}

	if($(this).hasClass("corner-tr")){
		$(this).css("border-color", "#7D8FAB");
		$(this).find("h3").css("border-color", "#7D8FAB");
	}

	if($(this).hasClass("corner-br")){
		$(this).css("border-color", "#F8D108");
		$(this).find("h3").css("border-color", "#F8D108");
	}

	if($(this).hasClass("corner-bl")){
		$(this).css("border-color", "#EB352C");
		$(this).find("h3").css("border-color", "#EB352C");
	}
});


});