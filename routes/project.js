exports.view = function(req,res){
	res.render('index',{
		'name' : 'Wait in Line',
		'image' : 'lorempixel.people.1.jpeg',
		'id' : 'project1'
	});
};