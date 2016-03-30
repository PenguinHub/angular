(function()
{
	var app = angular.module('store',[]);
	
	app.controller('StoreController', function()
	{
		this.products=gems;
	});
	app.controller("PanelController", function()
	{
		this.tab=1;
		this.selectTab=function(tab)
		{
			this.tab=tab||1;
		};

		this.isSelected= function(checkTab)
		{
			return this.tab=checkTab;
		}
	});
	
	var gems =[
	{
		name:'Dode',
		price: 2.95,
		description:'...',
		canPurchaase:true

	},

	{
		name:'Pentagonal Gem',
		price: 5.95,
		description:'...',
		canPurchaase:true
	}
	];



})();

