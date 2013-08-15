var myModule = angular.module('Angello', []);

myModule.controller('MainCtrl', function($scope) {
  $scope.currentStory;

  $scope.setCurrentStory = function (story) {
    $scope.currentStory = story;
  };

  $scope.deleteStory = function (story) {
    $scope.stories = _.without($scope.stories, story);
    if ($scope.currentStory === story) {
      $scope.setCurrentStory($scope.stories[0]);
    }
  };

  $scope.newStory = function () {
    var story = {title:'New Story', description:'New Description.'};
    $scope.stories.push(story);
    $scope.setCurrentStory(story);
  };

  $scope.stories = [
    {title:'Story 00', description:'Description pending.'},
    {title:'Story 01', description:'Description pending.'},
    {title:'Story 02', description:'Description pending.'},
    {title:'Story 03', description:'Description pending.'},
    {title:'Story 04', description:'Description pending.'},
    {title:'Story 05', description:'Description pending.'}
  ];

  $scope.setCurrentStory($scope.stories[0]);
});