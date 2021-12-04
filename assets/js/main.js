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

let myPrint = (a, b, res) => `${a}^${b}=${res}`;
function myPow (a, b, callback) {
  function pow (x, n) {
    if (n !== 1) return x *= pow(x,n - 1);
    return x; 
  };
  return callback(a, b, pow(a, b,));
};
console.log(myPow(3, 4, myPrint));
console.log(myPow(2, 3, myPrint));

function info () {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
};
let yearNow = new Date().getFullYear();
let car = {
  engine: 2000,
  model: 'Lacetti',
  name: 'Chevrolet',
  year: 2010,
  info: info,
  get used () {
    return this.year !== yearNow ? 'used' : 'new';
  },

set used(value) {
  if (value === 'new' && this.year < yearNow) this.year = yearNow;
}
};

let car2 = {
  engine: 5000,
  model: 'FX50 AWD',
  name: 'Infinite',
  year: 2019,
  info: info,
  get used () {
    return this.year !== yearNow ? 'used' : 'new';
  },

set used(value) {
  if (value === 'new' && this.year < yearNow) this.year = yearNow;
}
};
console.log(car.info());
car.used = 'new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(car2.info());
car.used = 'used';
console.log(car2.info());

let list