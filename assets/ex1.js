window.FT = {
  now: function (message) {
    window.alert('BANG! ' + message);
  }
};

// angular.module('noGlobals', []).FT = FT; // !!! put it in the module loader

// delete window.FT;

// angular.module('meLearnEx1', [])
//   .controller('Ex1Ctrl', function ($scope) {
//     var FT = angular.module('noGlobals').FT; // !!! retrieve it.

//     $scope.greeting = 'Salutations';
//     $scope.person = 'Dear Reader';
//     FT.now('fizz');
//   });


var mod = angular.module('meLearnEx1', []);

(function () {  // !!! put it in the module loader
  var ftCopy = FT;
  console.log('FT iefb. window.FT', window.FT);
  mod.factory('FT', function () {
    console.log('FT factory function. window.FT', window.FT);
    return ftCopy;
  });
})();

delete window.FT;

mod.controller('Ex1Ctrl', function ($scope, FT) { // !!! inject
    $scope.greeting = 'Salutations';
    $scope.person = 'Dear Reader';
    FT.now('fizz');
  });
