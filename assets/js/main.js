// var userFeed = new Instafeed({
//   get: 'user',
//   userId: 'Inqu4dro_real',
//   accessToken: '4204114729.ba4c844.b69bb7e7afec486999542568395d8360'
// });
// userFeed.run();

var feed = new Instafeed({ 
	get: 'user', 
	userId: '4204114729', 
	accessToken: '4204114729.1677ed0.1b275ac035254427bcc073596a9f8372',
	sortBy: 'most-recent', 
	limit: '12' 
}); 
feed.run()