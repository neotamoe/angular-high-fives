var myApp = angular.module('myApp', []);

myApp.controller('HighFiveController', function(RandomNumber, CountSuccess ){
  console.log('angular');
  var vm=this;
  // generate random number (skill level/quality of character on page load)
  vm.agentQuality = RandomNumber.random();
  console.log('agent:', vm.agentQuality);

  // function that adds to current count
  vm.counter = function(){
    CountSuccess.setCount();
    CountSuccess.getCount();
  };

  // vm.count = function(){
  //   vm.success=CountSuccess.getCount();
  //   return vm.success;
  // };

  // current count displaying on DOM at start


  vm.checkQuality = function(){
    vm.userQuality = RandomNumber.random();
    console.log('userQuality:', vm.userQuality);
    vm.success=CountSuccess.getCount();
    if(vm.userQuality >= vm.agentQuality){
      vm.counter();
      vm.success=CountSuccess.getCount();
    }
  };  // end checkQuality

}); // end controller
