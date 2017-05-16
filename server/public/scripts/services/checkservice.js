myApp.service('CheckFives', function(RandomNumber, CountSuccess){
  this.checkQuality = function(){
    this.userQuality = RandomNumber.random(1,10);
    console.log('userQuality:', vm.userQuality);
    vm.success=CountSuccess.getCount();
    if(vm.userQuality >= vm.agentQuality){
      vm.counter();
      vm.success=CountSuccess.getCount();
    }
  };  // end checkQuality
});  // end RandomNumber service
