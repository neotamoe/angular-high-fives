myApp.service('CheckFives', function(RandomNumber, CountSuccess){
  this.checkQuality = function(characterNumber){
    console.log('clicked high five button');
    this.userQuality = RandomNumber.random(1,11);
    console.log('userQuality:', this.userQuality);
    // vm.success=CountSuccess.getCount();
    if(this.userQuality >= characterNumber){
      this.counter = CountSuccess.setCount();
      console.log('Count:', CountSuccess.getCount());
      this.success = CountSuccess.getCount();
      return this.success;
    }
  };  // end checkQuality
});  // end RandomNumber service
