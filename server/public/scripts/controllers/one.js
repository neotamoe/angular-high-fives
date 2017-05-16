myApp.controller('agentMay', ['RandomNumber', 'CheckFives', 'CountSuccess', function(RandomNumber, CheckFives, CountSuccess){
  console.log('in agentMay');
  var vm=this;
  // generate random number (skill level/quality of character on page load)
  vm.agentQuality = RandomNumber.random(1,10);
  console.log('vm.agentQuality:', vm.agentQuality);
  // vm.checkQuality = function(){
  //   console.log('clicked high five button');
  // };
  // vm.checkQuality = CheckFives.checkQuality(vm.agentQuality);
  vm.checkQuality = CheckFives.checkQuality;
  // display successes on DOM
  vm.success = CountSuccess.getCount();
  console.log('vm.success:', vm.success);
}]); // end controller
