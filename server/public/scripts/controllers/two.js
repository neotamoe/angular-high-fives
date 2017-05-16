myApp.controller('agentCoulson', function(RandomNumber, CountSuccess ){
  console.log('angular');
  var vm=this;
  // generate random number (skill level/quality of character on page load)
  vm.agentQuality = RandomNumber.random(4,10);
  console.log('agent:', vm.agentQuality);


}); // end controller
