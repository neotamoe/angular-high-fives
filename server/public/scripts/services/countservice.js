myApp.service('CountSuccess', function(){
  var count = 0;

  this.getCount = function(){
    return count;
  };  // end getCount

  this.setCount = function(){
    count++;
  };  // end setCount
});  // end CountSuccess service
