var add = function(number1, number2) {
    return number1 + number2;
  };
  
  var subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  var multiply = function(number1, number2) {
    return number1*number2;
  };

  var divide = function(number1, number2) {
    return number1/number2;
  };


  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var result = divide(number1, number2);
  alert(result);

  var res = function() {
      var weight = prompt("wht is your weight?");
      var height = prompt("what is your heith?");
        alert (parseInt(weight)*parseInt(height));
  }