app.controller('textImagesContainerController', function($scope, $window) {

    $scope.images = getImages(window.innerWidth);
});

function getImages(windowWidth){

    const smallWindowMaxWidth = 767;

    const images = [
        {id: 1, url: "http://placehold.it/400x300"},
        {id: 2, url: "http://placehold.it/400x300"},
        {id: 3, url: "http://placehold.it/400x300"},
        {id: 4, url: "http://placehold.it/400x300"},
        {id: 5, url: "http://placehold.it/400x300"},
        {id: 6, url: "http://placehold.it/400x300"},
    ]

    if(windowWidth < smallWindowMaxWidth)
        return images.slice(0, 2);
    return images;
}