
myApp.controller('homeController', ['CountSuccess', 'RandomNumber', function(CountSuccess, RandomNumber ){
  console.log('angular');
  var vm=this;
  // function that adds to current count
  vm.counter = function(){
    CountSuccess.setCount();
    return CountSuccess.getCount();
  };
  // // set success so it can be displayed in footer--> possibly use in future refactor
  // vm.success = CountSuccess.getCount();
  // console.log('vm.success:', vm.success);

  vm.userQuality = RandomNumber.random(1,10);

}]); // end homeController
