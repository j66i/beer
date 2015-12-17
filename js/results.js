(function(){
	var firstPlace = localStorage.getItem('firstResult');
	// var secondPlace = localStorage.getItem('secondResult');
	// var thirdPlace = localStorage.getItem('thirdResult');
	// var firstPlaceString = JSON.stringify(firstPlace);
	var winnerImg = $('.winnerImg');
	// var resultsHero = $(".results-hero");
	// var triangle = $(".triangle");
	var sprite = $('.sprite');
	var resultHeader = document.querySelector(".resultHeader");
	var resultCaption = document.querySelector(".resultCaption");
	var quote = document.querySelector(".quote");
	var attribution = document.querySelector(".attribution");
	var quoteObject = {
		Brooklyn: "Not only did Milton Glaser design Brooklyn Brewery's logo, he helped come up with the name. Originally called Brooklyn Eagle Brewery, Milton convinced the owners to drop the eagle. When asked what inspired the ‘B’ logo, Milton answered, &ldquo;I thought of the swirl of foam,&rdquo; and squiggled his finger in the air.",
		Dogfish600: "The surface of this is so unpleasant. It sort of looks lumpy, like food that has gone bad. To me, this is antithetical to the idea of refreshing taste. Even though this violates assumption, it still doesn’t create a sense of anticipation about drinking it.",
		EvilTwin600: "I just did the identity for the seventh season of ‘Mad Men.’ This looks as though it came out of that period. But it’s poorly done in terms of its complexity. Still, it looks out of place, and that is one of the criteria these craft beers seem to be concerned with.",
		Gonzo600: "With this Ralph Steadman drawing, the idea of transgression and resistance and bad taste is raised to its most obvious level. It’s also sort of dealing with masculinity, heroic figures and death. There’s a real narrative. It’s a demonstration that this beer is not playing by the rules.",
		HopNosh600: "This is a little bit like a label produced during the ’30s. It has a reference to an agricultural product, but not necessarily beer. There’s a certain innocent charm about it. If my theory about creating affection is true, then that may be enough of an imperative to buy this beer.",
		Kitachino: "Japanese things always look as if everything’s in the right place; this doesn’t quite look that way. It looks as if it started with a Japanese idea and then got broken up. It’s the intent to be different. I suppose that’s what the product itself is trying to say: We’ve departed from the conventions, and therefore we’re distinct and unusual.",
		Mikkeller600: "This represents a sort of Danish contemporary design with this pseudoprimitive drawing. It’s a semicartoon, probably derived from children’s books more than anything else. It looks friendly, although, in my mind, it has nothing to do with beer.",
		Nitro600: "This is adventurous because it’s so unlike most existing beer labels. It has no specific beer reference at all. It could be for a pharmaceutical, a hand cream or anything. It’s really just a type selection and the idea of doing it in white on black. The product is distinguishable from everything else that’s around.",
		OmmeGang600: "It certainly doesn’t look like an American beer, but it does look like it has some craft references — the color is odd and unconventional, and that helps distinguish it. The quality of the silhouette of the two figures is convincing. Somebody knew how to represent this without looking amateurish.",
		Resin600: "It has a traditional trademark identity that looks like many that exist, but the complexity and the color scheme deviates from those. The lightning bolts are gratuitous. All the elements put together aren’t really working.",
		ShinerBock600: "It’s sort of marginal in terms of whether it’s a commercial, large-volume beer or a small, artisan beer — you can’t quite tell. Even though it’s conventional, it’s memorable. The angle of the lettering and the yellow produce something you can remember. It’s not peculiar.",
		Smuttynose600: "These two old, disreputable geezers certainly don’t represent sophisticated drinking. The intention is, basically, to shock the viewer. The idea of looking like you don’t know what you’re doing is really amplified here."
	};

	var attributionLink = {
		NYT: "www.nytimes.com/interactive/2014/03/30/magazine/mag30-Glaser-beer-sidebar.html",
		NewYorker: "http://www.newyorker.com/culture/culture-desk/i-brooklyn-brewery"
	};
	var attributionTitle = {
		NYT: "Milton Glaser, NYT.com",
		NewYorker: "NewYorker.com"
	};

	//Get first place image
	winnerImg.attr('src', 'img/' + firstPlace + '.png').css({
		opacity: 0,
		display: 'block'
	}).animate({opacity:1}, 600);

	//Get good taste, meh, or blergh
	if(firstPlace === "HopNosh600" || firstPlace === "Gonzo600" || firstPlace === "Nitro600" || firstPlace === "OmmeGang600" || firstPlace === "Brooklyn") {
		resultHeader.innerHTML = "you've got<br>good taste";
		resultCaption.innerHTML = "At least according to Milton";
		// resultsHero.css('background', '#50E3C2');
		// triangle.css('background', '#50E3C2');
	} else if (firstPlace === "Mikkeller600" || firstPlace === "EvilTwin600" || firstPlace === "Smuttynose600" || firstPlace === "ShinerBock600") {
		resultHeader.innerHTML = "meh";
		// resultCaption.innerHTML = "That's what Milton thinks";
		// resultsHero.css('background', '#FFC842');
		// triangle.css('background', '#FFC842');
		sprite.css('background', 'url(img/zz-spritesheet.svg)');
	} else {
		resultHeader.innerHTML = "blergh!";
		resultCaption.innerHTML = "Milton is disgusted";
		// resultsHero.css('background', '#FF9DA9');
		// triangle.css('background', '#FF9DA9');
		sprite.css('background', 'url(img/boo-spritesheet.svg)');
	}

	//Get first place quote
	quote.innerHTML = quoteObject[firstPlace];
	
	//Get attribution
	if(firstPlace === "Brooklyn") {
		attribution.innerHTML = attributionTitle.NewYorker;
	} else {
		attribution.innerHTML = attributionTitle.NYT;
	}

	//Get attribution link	
	if(firstPlace === "Brooklyn") {
		attribution.href = attributionLink.NewYorker;
	} else {
		attribution.href = attributionLink.NYT;
	}

})();
	

