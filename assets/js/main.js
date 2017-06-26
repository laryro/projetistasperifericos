var feed = new Instafeed({ 
	get: 'user', 
	userId: '4204114729', 
	accessToken: '4204114729.1677ed0.1b275ac035254427bcc073596a9f8372',
	sortBy: 'most-recent', 
	limit: '12',
	template: '<div class="col-sm-3 col-xs-6 instagram-image"><a href="{{link}}"><img class="img-responsive" src="{{image}}" /></a></div>',
	resolution: 'standard_resolution'
}); 
feed.run()