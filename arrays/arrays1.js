// array sample
const scores = [100, 50, 72];
console.log(scores[0]); // 100

// add to array
scores.push(180);
scores.push(110);

// delete array from the last item
scores.pop();

// loop through array
/*
100
50
72
180
*/
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

// remove an item from the beginning of the list
scores.shift();

// add an item at the beginning of the list
scores.unshift(99);

console.log(scores);
