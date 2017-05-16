myApp.service('RandomNumber', function(){
  this.random=function(min,max){
    return (Math.floor((Math.random() * max) + min));
  };  // end random
});  // end RandomNumber service
