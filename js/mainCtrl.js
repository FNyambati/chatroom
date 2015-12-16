var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService){

    $scope.getParseData = function(){
        parseService.getData().then(function(response){
            $scope.messages = response.data.results;
        })
    }

    $scope.postData = function(){
        parseService.postData($scope.message)
       
    }

    setInterval(function(){
        $scope.getParseData();
    }, 1500)
})