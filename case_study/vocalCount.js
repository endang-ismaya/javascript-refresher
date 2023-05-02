function vocalCount(str) {
    let result = {
        a: 0,
        i: 0,
        u: 0,
        e: 0,
        o: 0,
    };

    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a") {
            result.a++;
        } else if (str[i] == "i") {
            result.i++;
        } else if (str[i] == "u") {
            result.u++;
        } else if (str[i] == "e") {
            result.e++;
        } else if (str[i] == "o") {
            result.o++;
        }
    }

    return result;
}

console.log(
    vocalCount(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ea perferendis aut molestiae atque minima corporis? Exercitationem, beatae. In quam odit accusamus asperiores suscipit officiis, aperiam eius mollitia dolorem tempore."
    )
);
