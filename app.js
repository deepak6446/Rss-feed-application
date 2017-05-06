var app = angular.module('rssApp',['ngSanitize']);
app.controller('rssCntrl',function($scope,$http){
	$scope.getRss = function(){
		console.log($scope.url);
		var d={url:$scope.url};
		  $http
              .post("/api/rssfeed",d)
              .then(function(response){
                    console.log(response.data);
                    console.log(response.data);
                    $scope.items=response.data;
                  })
                .catch(function(err){
                    console.log(err);
                 });
		}
	console.log("dsjd");
});