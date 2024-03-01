function changeWord(selectedText, changedText, text) {
    
}

const kalimat1 = "Jubaedah sangat mencintai kamu selamanya"
const  kalimat2 = "Gunung everest tak akan mampu menggambarkan besarnya cintaku padamu"

// EXPECTED RESULT -> Ketika function tersebut dipanggil dengan variabel kalimat1
console.log(changeWord('mencintai','membenci',kalimat1)) 
// Maka output yang harus keluar adalah -> "Jubaedah sangat membenci kamu selamanya"

// Ketika function tersebut dipanggil dengan variabel kalimat2
console.log(changeWord('everest','fuji' ,kalimat2)) 
// Maka output yang harus keluar  adalah -> "Gunung fuji tak akan mampu menggambarkan besarnya cintaku padamu"