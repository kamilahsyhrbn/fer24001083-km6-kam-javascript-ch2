function checkTypeNumber(givenNumber){

}

//EXPECTED RESULT -> Ketika function tersebut dipanggil
console.log(checkTypeNumber(10)) //OUTPUT yang keluar -> "Genap"
console.log(checkTypeNumber(3))   //OUTPUT yang keluar -> "Ganjil"
console.log(checkTypeNumber("3"))  //OUTPUT  yang keluar -> "Error: Invalid data type"
console.log(checkTypeNumber({}))    //OUTPUT  yang keluar -> "Error: Invalid data type"
console.log(checkTypeNumber([])) // OUTPUT yang keluar -> "Error: Invalid data type"
console.log(checkTypeNumber()); // OUTPUT yang keluar -> "Error: Bro where is the parameter?"