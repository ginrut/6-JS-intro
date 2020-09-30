function letters(text, step) {
 let error = [];

    // validacija
    if (typeof text !== "string") {
        error.push(`pirmas kintamasis turi buti tekstas.`);
        // return `pirmas kintaasis turi buti tekstas`
    };

    if (typeof step !== "number") {
        error.push(`antras kintamasis turi buti skaicius.`);
        // return `antras kintamasis turi buti skaicius`
    };

    if (text.length < step){
        return `Veiksmai negalimi.`
    };

    if (step === 0){
        return `Irasykite skaiciu.`
    }

    if (error.length > 0) {
        return error;
    }


    // Logika 
    const textSize = text.length;
    let atsakymas = '';

    for (let i = 0; i < textSize; i++) {
    const raide = text[i];

        
        if(i % step ===  step - 1){
            atsakymas += raide;
        }
    }
    return atsakymas; 
}        

    if (step < 0) {
        let atbulasAtsakymas = '';
        for (let i = 0; i < text.length; i++) {
            const raide = text[text.length - 1 - i];
            atbulasAtsakymas = atbulasAtsakymas += raide;
                
            if(i % step ===  step - 1){
                    atbulasAtsakymas += raide;
            }
         }
    return atbulasAtsakymas; 
    }

}



// console.log(letters(1561, 2));
// console.log(letters('Labas', 'rytas'));
// console.log(letters(1561, 'rytas'));

// console.log(letters('abcdefg', 2), '->', 'bdf');
// console.log(letters('abcdefghijkl', 3), '->', 'cfil');
console.log(letters('abcdefg', -2), '->', 'fdb');
console.log(letters('abcdefghijkl', -3), '->', 'jgda');

console.log(letters('abc', 0));
// console.log(letters('abc', 4));