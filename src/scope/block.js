function fruits(){
    if (true){
        var fruit = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }

    console.log(fruit); // podemos acceder porque var es declaracion global
    console.log(fruit2); // no podemos porque let es declaracion de bloque
    console.log(fruit3); // es igual que let
}