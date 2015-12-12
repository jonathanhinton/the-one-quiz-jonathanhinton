// In the file named AugmentedIIFE.js, augment FruitMaker with a function named slices() that accepts two arguments: the name of the fruit, and the number of slices to make. It should return an array containing the name of the fruit duplicated how ever many slices was requested.
var AugFruitMaker = (function(slicer){

    slicer.slices = function(fruit, slices){
      var sliceArray = [];
      var i = 0;
      while (i < slices) {
        sliceArray.push(fruit);
        i++;
      };
      console.log("sliceArray", sliceArray);
      return sliceArray;
    }
return slicer;

})(FruitMaker);

console.log("FruitMaker", FruitMaker);
console.log("slices", FruitMaker.slices("apple", 7));