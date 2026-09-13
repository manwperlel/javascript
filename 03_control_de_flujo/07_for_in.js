let user = {
    id: 1,
    name: "juan",
    Age:25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ["dog", "cat", "pig"]

for ( let i in animales) {
    console.log(i, animales[i])
}