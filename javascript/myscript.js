/*
*
*   chiedi all’utente il cognome
*   inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
*   stampa la lista ordinata alfabeticamente
*   scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*
*/

// array and variables definition
let surnameList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
let userSurname;

// user surname inpit
userSurname = prompt("Inserisci il tuo cognome");

// transforming user input with capitalization
surnameList.push(userSurname.charAt(0).toUpperCase() + userSurname.substr(1).toLowerCase());

// sorting the array in alphabetical order
surnameList.sort()

console.log(surnameList)

for (let i = 0; i < surnameList.length; i++){

    // humanizing the list and display
    console.log( (surnameList.indexOf(surnameList[i]) + 1) + ' ' + surnameList[i])

}

