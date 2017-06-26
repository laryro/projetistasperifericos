// var userFeed = new Instafeed({
//   get: 'user',
//   userId: 'Inqu4dro_real',
//   accessToken: '4204114729.ba4c844.b69bb7e7afec486999542568395d8360'
// });
// userFeed.run();

var feed = new Instafeed({ 
	get: 'user', 
	userId: 'Inqu4dro_real', 
	accessToken: '4204114729.ba4c844.b69bb7e7afec486999542568395d8360',
	sortBy: 'most-recent', 
	limit: '12' 
}); 
feed.run()