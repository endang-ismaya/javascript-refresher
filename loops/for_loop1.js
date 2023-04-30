// For Loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

/*
1
12
123
1234
12345
*/
tmp = "";
for (let i = 1; i <= 5; i++) {
    console.log(tmp + i);
    tmp = tmp + i;
}

for (let i = 1; i <= 5; i++) {
    let tmp = "";
    for (let j = 1; j <= i; j++) {
        tmp = tmp + j;
    }
    console.log(tmp);
}
