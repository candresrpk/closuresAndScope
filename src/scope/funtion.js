function greeting(){
    let userName = 'ana'
    console.log(userName)

    if (userName === 'ana'){
        console.log(`Hello ${userName}!!`)
    }
}

greeting();
console.log(userName) // nos dara error porque el scope de la variable es solo la funcion


