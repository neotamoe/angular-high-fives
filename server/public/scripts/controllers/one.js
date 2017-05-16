myApp.controller('agentMay', function(RandomNumber){
  console.log('angular');
  var vm=this;
  // generate random number (skill level/quality of character on page load)
  vm.agentQuality = RandomNumber.random(1,10);
  console.log('agent may:', vm.agentQuality);

  vm.checkQuality = CheckFives.checkQuality;
  vm.userQuality = CheckFives.userQuality;
}); // end controller
