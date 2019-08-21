app.controller("imageController", ["$scope", "$http", function($scope, $http) {
    console.log($scope);
    $scope.searchTag = 'popular';
    $scope.images = function() {
        $http({
            method: "GET",
            headers: {
                Authorization: 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
            },
            params: {
                query: $scope.searchTag,
                per_page: 30,
            },
            url: `https://api.unsplash.com/search/photos`
        }).then(function(res) {
                var totalFound = res.data.results.length;
                var photos = [];
                for (var i = 0; i < totalFound; i++) {
                    var thumb = res.data.results[i].urls.thumb;
                    photos.push({
                        thumb: thumb
                    });
                }
                $scope.photos = photos;
            },
            function(res) {
                console.log('error', res);
            });
    };

    $scope.images();
}]);
