var counter = (function() {
  var count = 0;
  return function (num) {
    count = num !== undefined ? num : count;
    return count++;
  }
}())
console.log(counter());
console.log(counter(1));
console.log(counter(100));
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter(0));
console.log(counter());

var counting = (function(){
  var count = 0;
  return {
    value(num) {
      if (num !== undefined) count = num;
      return count;
    },
    decrement(){
      count--;
    },
    increment(){
      count++;
    }
  };
}());
console.log(counting.value());
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value());
counting.decrement();
counting.decrement();
console.log(counting.value());
console.log(counting.value(100));
counting.decrement();
console.log(counting.value());
console.log(counting.value(200));
counting.increment();
console.log(counting.value());


