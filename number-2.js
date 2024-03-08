function checkTypeNumber(givenNumber) {
  if (typeof givenNumber == "number") {
    if (givenNumber % 2 === 0) {
      return "Genap";
    } else {
      return "Ganjil";
    }
  } else {
    if (givenNumber == null) {
      return "Error: Habibi where is the parameter?";
    } else {
      return "Error: Invalid data type";
    }
  }
}

//EXPECTED RESULT -> Ketika function tersebut dipanggil
console.log(checkTypeNumber(10)); //OUTPUT yang keluar -> "Genap"
console.log(checkTypeNumber(3)); //OUTPUT yang keluar -> "Ganjil"
console.log(checkTypeNumber("3")); //OUTPUT  yang keluar -> "Error: Invalid data type"
console.log(checkTypeNumber({})); //OUTPUT  yang keluar -> "Error: Invalid data type"
console.log(checkTypeNumber([])); // OUTPUT yang keluar -> "Error: Invalid data type"
console.log(checkTypeNumber()); // OUTPUT yang keluar -> "Error: Bro where is the parameter?"
