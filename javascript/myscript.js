/*
*
*   chiedi all’utente il cognome
*   inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
*   stampa la lista ordinata alfabeticamente
*   scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*
*/


let surnameList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
let userSurname;

userSurname = prompt("Inserisci il tuo cognome");

surnameList.push(userSurname.charAt(0).toUpperCase() + userSurname.substr(1).toLowerCase());

surnameList.sort()

console.log(surnameList)

for (let i = 0; i < surnameList.length; i++){

    console.log( (surnameList.indexOf(surnameList[i]) + 1) + ' ' + surnameList[i])

}

