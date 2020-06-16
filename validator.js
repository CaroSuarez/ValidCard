const validator = {
  maskify: function(creditCardNumber) {
    var n=creditCardNumber.length;
    
    if(n<5){
      return creditCardNumber; 
      
    }else{    	
        var x1=creditCardNumber.substr(-4,4);
        var x2=creditCardNumber.substr(0,n-4).replace(/\w/g,"*");
        var x3=x2.concat(x1); 
        return x3;
        
      }
    }
  };

export default validator;

