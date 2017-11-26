app.controller('textImagesContainerController', function($scope, $window) {

    $scope.heading = getHeading();
    $scope.paragraphs = getParagraphs();
    $scope.images = getImages(window.innerWidth);
});

function getHeading(){
    return "Heading";
}

function getParagraphs(){
    return [
        {id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat duis ultricies lacus sed turpis."},
        {id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat duis ultricies lacus sed turpis."}
    ]
}

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