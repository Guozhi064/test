var app = angular.module('myapp',['ui.router']);
	app.config(function($stateProvider,$urlRouterProvider){
		$stateProvider
			.state('home',{
	            url:'/home',
	            templateUrl:'views/home.html'
        	})
        	.state('list',{
	            url:'/list',
	            templateUrl:'views/list.html'
        	})
        	.state('found',{
	            url:'/found',
	            templateUrl:'views/found.html'
        	})
        	.state('cart',{
	            url:'/cart',
	            templateUrl:'views/cart.html'
        	})
        	.state('my',{
	            url:'/my',
	            templateUrl:'views/my.html'
        	})
        	.state('my.shezhi',{
        		url:'/shezhi',
        		 templateUrl:'views/shezhi.html'
        	})
        	.state('my.denglu',{
        		url:'/denglu',
        		 templateUrl:'views/denglu.html'
        	})
        $urlRouterProvider.when('','/home');
	})

//更多
	app.controller("myMine",function($scope,$http,$rootScope){
		$http({
				method:'get',
				url:'data/mine.json'
			}).success(function(response){	
				var data1=response.data1;
				var data2=response.data2;
			    var dataJson;
			    $scope.data1=data1;
			    $scope.data2=data2;
				/*angular.forEach(data1,function(data){
					dataJson=data;
					console.log(data.img)
				})	
				$scope.dataJson=dataJson;*/			
		})


	})



//更多里面的登录
	 app.controller("denglu",function($scope,$http,$rootScope){
	// 	$http({
	// 				method:'get',
	// 				url:'data/mine.json'
	// 			}).success(function(response){	
	// 				var denglu=response.denglu;
	// 			    console.log(denglu)
	// 			    var dataJson;
	// 			    $scope.denglu=denglu;
	// 		})


	$http.get('data/mine.json')
	     .success(function(denglu) {
		    console.log(denglu)
		    $scope.goods=denglu;
	
	     })
	     .error(function() {
			alert('error')
	    })
	})