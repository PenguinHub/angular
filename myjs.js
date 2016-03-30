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
		cost: 2
	},
	{
		name:"item2",
		cost:3
	}
	];
})();