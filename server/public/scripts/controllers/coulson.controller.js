myApp.controller('agentCoulson', ['RandomNumber', 'CountSuccess', 'CheckFives', function(RandomNumber, CountSuccess, CheckFives){
  console.log('in agentCoulson controller');
  var vm=this;
  // generate random number (skill level/quality of character on page load)
  vm.agentQuality = RandomNumber.random(4,11);
  console.log('agent:', vm.agentQuality);

  vm.checkQuality = CheckFives.checkQuality;
  // display successes on DOM
  vm.success = CountSuccess.getCount();
  console.log('vm.success:', vm.success);

}]); // end controller
