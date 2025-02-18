//9

function testeEscopo() {
    var a = 10;
    if (true) {
        let b = 20;
        console.log(a); // ?
        console.log(b); // ?
    }
    console.log(a); // ?
    console.log(b); // ?
}
testeEscopo();

//será impresso os valores, menos o b, pois não tem valor