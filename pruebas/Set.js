// const values = ['wes', 'kait', 'wes', 'snickers', 'kait', 'pop'];

// var set0 = new Set(values);

// // Set(4);

// console.log(values);

// var str = 'Hello World',
//     arr = ['foo', 'bar'],
//     map = new Map();

// var set1 = new Set(str);
// var set2 = new Set(arr);
// var set3 = new Set(map);
// var set4 = new Set(set1);

// console.info(set1, set2, set3, set4);

// var mySet = new Set();

// mySet.add(1);
// mySet.add('foo');

// console.log(mySet);

// mySet.add(4 * 2); // 8

// var fn = () => 'Hello World';

// mySet.add(fn()); // Hello World

// console.log(mySet);

// var mySet = new Set()
//     .add('foo')
//     .add('bar')
//     .add('bar')
//     .add('bar')
//     .add('bar')
//     .add('bar')
//     .add('bar')
//     .add('bar')
//     .add('bar')
//     .add(400 * 200);

// console.log(mySet.size);
// console.log(mySet);

// mySet.add(1);
// mySet.add('foo');

// mySet.forEach((ele) => console.info(ele));

// mySet.forEach((ele, n, obj) => console.info(ele));

var mySet = new Set(['foo', 'bar', 'foobar']);

// has
console.info(mySet.has('bar')); // true
console.info(mySet.has('xxx')); // false

// entries
for (let value of mySet.entries()) {
    console.info(value);
}

// values
for (let value of mySet.values()) {
    console.info(value);
}

// keys
for (let value of mySet.keys()) {
    console.info(value);
}

// Clearing
mySet.clear();
console.info(mySet.size); // 0
