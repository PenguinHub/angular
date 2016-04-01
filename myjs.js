(function ()
{
	var app=angular.module('myApp',[]);
	app.controller('myController', function()
	{
		this.items=things;
	});

	var things=[
	{
		name:"itemOne",
		cost: 2,
		description: "itemOne description",
		specs:"itemOne specs",
		reviews:"itemOneReviews"

	},
	{
		name:"item2",
		cost:3,
		description: "item2 description",
		specs:"item2 specs",
		reviews:"item2Reviews"
	}
	];
})();