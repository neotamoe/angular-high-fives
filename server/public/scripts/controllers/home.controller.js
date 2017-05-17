
myApp.controller('homeController', ['CountSuccess', 'RandomNumber', 'CheckFives', function(CountSuccess, RandomNumber, CheckFives){
  console.log('angular homeController');
  var vm=this;
  // function that adds to current count
  vm.counter = function(){
    return CountSuccess.getCount();
  };

  vm.warning = "Warning!";



}]); // end homeController
