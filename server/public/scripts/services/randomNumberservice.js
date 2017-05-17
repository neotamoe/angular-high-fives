myApp.service('RandomNumber', function(){
  this.random=function(min,max){
    // returns a random number that may equal min but is less than (but not equal to) max
    return Math.floor(Math.random() * (max-min)) + min;
  };  // end random
});  // end RandomNumber service
