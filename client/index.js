(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Zombie Pets';

    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };

    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };
    $scope.weapon  = {};
    $scope.weapons = [];
    $scope.pet     = {health:100};
    $scope.pets    = [];

    $scope.player1  = null;
    $scope.player2  = null;

    $scope.addWeapon = function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      $('#name').focus();

    };
    $scope.setPlayer = function(num){
      $scope['player' + num] =  this.p;
    };


    $scope.addPet = function(){
      var index = $scope.pet.weapon * 1;

      $scope.pet.weapon = $scope.weapons[index];
      $scope.pets.push($scope.pet);
      $scope.pet = {health:100};
    };
  }]);
})();

