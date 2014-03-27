var myModule = angular.module('Angello', []);

myModule.controller('MainCtrl', function($scope) {
  $scope.statuses = [
        {name: 'Back Log'},
        {name: 'To Do'},
        {name: 'In Progress'},
        {name: 'Code Review'},
        {name: 'QA Review'},
        {name: 'Verified'},
        {name: 'Done'}
      ];
  $scope.statusesIndex = _.indexBy($scope.statuses, 'name');
  $scope.types = [
        {name: 'Feature'},
        {name: 'Enhancement'},
        {name: 'Bug'},
        {name: 'Spike'}
      ];
  $scope.typesIndex = _.indexBy($scope.types, 'name');
  $scope.currentStory = {};

  $scope.setCurrentStory = function (story) {
    $scope.currentStory = story;
    $scope.currentStatus = $scope.statusesIndex[story.status];
    $scope.currentType = $scope.typesIndex[story.type];
  };

  $scope.setCurrentStatus = function (status) {
    if (!_.isUndefined($scope.currentStory)) {
      $scope.currentStory.status = status.name;
    }
  }

  $scope.setCurrentType = function (type) {
    if (!_.isUndefined($scope.currentStory)) {
      $scope.currentStory.type = type.name;
    }
  }

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