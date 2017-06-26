var feed = new Instafeed({ 
	get: 'user', 
	userId: '4204114729', 
	accessToken: '4204114729.1677ed0.1b275ac035254427bcc073596a9f8372',
	sortBy: 'most-recent', 
	limit: '12',
	template: '<div class="col-sm-3"><a href="{{link}}"><img src="{{image}}" /></a></div>'
}); 
feed.run()