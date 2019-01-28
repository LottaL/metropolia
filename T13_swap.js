/*Write functions intersection(a,b) , union(a,b), and superset(a,b), where a and b are
sets. Note that the functions should be pure, ie. not modify their argument arrays. Test the functions
with sets, including empty sets and sets with one member. Using one of the functions, implement a
function to check how many elements two sets have in common (this could be used for checking
how many correct numbers a lotto guess has).
*/

let arr1 = makeSet(1, 40, 7); //random set of n for testing
let arr2 = makeSet(1, 40, 7); //random set of n for testing
let arr3= new Set([1, 4, 6, 37, 23, 6, 24]); //for testing superset
let arr4 = new Set([1, 37, 6, 4, 24]); // for testing superset

console.log(arr1);
console.log(arr2);

console.log('Intersection:');
console.log(intersection(arr1, arr2));

console.log('Union:');
console.log(union(arr1, arr2));

console.log('Superset');
console.log(superset(arr1, arr2));

console.log('You had ' + lotterycheck(arr1, arr2) + ' right!');

function lotterycheck(lottery, guesses) {
  return intersection(lottery, guesses).size;;
}

function makeSet(from, to, len) {
  let numberset = new Set();
  if (len <= 0) {
    return numberset;
  }
  while (numberset.size !== len) {
    let random = Math.floor(Math.random() * to) + from;
    numberset.add(random);
  }
  return numberset;
}

function intersection(a, b) {
  /*let intersect = new Set([...a].filter(n => b.has(n)));
  return intersect;*/
  return new Set([...a].filter(n => b.has(n)));
}

function union(a, b) {
  /*let union = new Set([...a, ...b]);
  return union;*/
  return new Set([...a, ...b]);
}

function superset(a, b) {
  let isContained = true;
  b.forEach(n => {
    if (!a.has(n)) {
      isContained = false;
      return;
    }
  });
  return isContained;
}