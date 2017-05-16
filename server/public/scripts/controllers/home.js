
myApp.controller('homeController', ['CountSuccess', function(CountSuccess ){
  console.log('angular');
  var vm=this;
  // function that adds to current count
  vm.counter = function(){
    CountSuccess.setCount();
    CountSuccess.getCount();
  };

  vm.success = vm.counter();
}]); // end controller
