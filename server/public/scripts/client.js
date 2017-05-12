var myApp = angular.module('myApp', []);

myApp.controller ('nyotaUhura', function(RandNumb, CountFives){
  var vm = this;

  console.log('angular sourced');

  vm.startNumber = RandNumb.random();
  console.log('vm.startNumber-->', vm.startNumber);

  vm.counter = CountFives.getCount();
  console.log('vm.counter-->', vm.counter);

  vm.clickFive = function(){
    vm.yourNumber = RandNumb.random();
    console.log('vm.yourNumber-->', vm.yourNumber);
    if (vm.yourNumber >= vm.startNumber) {
      CountFives.upCount();
      vm.counter = CountFives.getCount();
    }
  };  // end clickFive


});  // end controller
