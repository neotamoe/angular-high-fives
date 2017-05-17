
myApp.controller('homeController', ['CountSuccess', 'RandomNumber', 'CheckFives', function(CountSuccess, RandomNumber, CheckFives){
  console.log('angular homeController');
  var vm=this;
  // function that adds to current count
  vm.counter = function(){
    return CountSuccess.getCount();
  };
  // set success so it can be displayed in footer--> possibly use in future refactor
  // vm.success = CountSuccess.getCount();
  // console.log('vm.success:', vm.success);



}]); // end homeController
