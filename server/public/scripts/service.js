myApp.service('RandNumb', function(){
  this.random = function(){
    return Math.floor((Math.random() * 10) + 1);
  };
});  // end randNumb

myApp.service('CountFives', function(){
  var count = 0;

  this.getCount = function(){
    return count;
  };  // end getCount

  this.upCount = function(){
    count++;
  };  // end upCount
});  // end
