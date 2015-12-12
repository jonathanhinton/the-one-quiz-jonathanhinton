// In the file named IIFE.js. Write an IIFE that defines a global variable named FruitMaker. It should contain a private array holding the following strings: "apples", "bananas", "cherries", "huckleberries".

var FruitMaker = (function(){
  var fruits = ["apples", "bananas", "cherries", "huckleberries"]
  return {

    getFruits: function(){
      return fruits;
    }

  };

})();
