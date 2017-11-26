app.controller('textImageContainerController', function($scope, $window) {

    $scope.heading = getHeading();
    $scope.paragraphs = getParagraphs();
    $scope.imageUrl = getImageUrl();
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

function getImageUrl(){

    return "http://placehold.it/1600x800";
}