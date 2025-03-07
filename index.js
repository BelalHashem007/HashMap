import { HashMap } from "./Hash.js";

const testData = [
    ["notebook", "gray"],
    ["ocean", "blue"],
    ["piano", "black"],
    ["queen", "gold"],
    ["robot", "silver"],
    ["sunflower", "yellow"],
    ["tiger", "orange"],
    ["umbrella", "red"],
    ["volcano", "brown"],
    ["whale", "navy"]
  ];
const test = HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("iceCream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
console.log(test.entries());
test.set('moon', 'silver');
testData.forEach(([key,value])=>  test.set(key,value))
console.log(test.entries());

