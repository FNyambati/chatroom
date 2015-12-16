var app = angular.module('chatroom');

app.service('parseService', function($http){

    this.postData = function(yourMessage){
        return $http({
            method: 'POST',
            url: 'https://api.parse.com/1/classes/chat',
            data: {
                text: yourMessage
            }
        });
    };


    this.getData = function(){
        return $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/chat?order=-createdAt'
        })
    };
});
