// VERSI 1

function changeWord(selectedText, changedText, text) {
    return text.split(selectedText).join(changedText);
}

const kalimat1 = "Jubaedah sangat mencintai kamu selamanya"
const kalimat2 = "Gunung everest tak akan mampu menggambarkan besarnya cintaku padamu"

// EXPECTED RESULT -> Ketika function tersebut dipanggil dengan variabel kalimat1
console.log("Versi 1 : ", changeWord('mencintai','membenci',kalimat1)) 
// Maka output yang harus keluar adalah -> "Jubaedah sangat membenci kamu selamanya"

// Ketika function tersebut dipanggil dengan variabel kalimat2
console.log("Versi 1 : ", changeWord('everest','fuji' ,kalimat2)) 
// Maka output yang harus keluar  adalah -> "Gunung fuji tak akan mampu menggambarkan besarnya cintaku padamu"

// VERSI 2
function changeWord(selectedText, changedText, text){
    return text.replace(selectedText, changedText);
}

const text1 = "Joko sangat mencintai kamu selamanya"
const text2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu"
// Output jika dijalankan versi 2 dari function changeWord()
console.log("Versi 2 : ", changeWord('mencintai','menyukai',text1)); 
console.log("Versi 2 : ", changeWord('bromo','semeru' ,text2));