myApp.service('RandomNumber', function(){
  this.random=function(){
    return (Math.floor((Math.random() * 10) + 1));
  };  // end random
});  // end RandomNumber service

myApp.service('CountSuccess', function(){
  var count = 0;

  this.getCount = function(){
    return count;
  };  // end getCount

  this.setCount = function(){
    count++;
  };  // end setCount
});  // end CountSuccess service
