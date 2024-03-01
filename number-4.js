const dataPenjualanPakKomeng = [
    {
        namaProduct : "Sepatu Futsal Nike Vapor Academy 8",
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90,
    },
    {
        namaProduct : "Sepatu Warrior Tristan Black Brown High - Original",
        hargaSatuan : 960000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 37,
    },
    {
        namaProduct: "Sepatu Warrior Tristan Marron High - Original",
        kategori : "Sepatu Sneaker",
        hargaSatuan : 360000,
        totalTerjual : 90,
    },
    {
        namaProduct:"Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original",
        hargaSatuan : 120000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
]

function hitungTotalPenjualan(dataPenjualan){

}

// EXPECTED RESULT -> ketika function tersebut dipanggil dengan variabel dataPenjualanPakKomeng
console.log(hitungTotalPenjualan(dataPenjualanPakKomeng))

// EXPECTED OUTPUT -> 307
// 307 dari mana? dari setiap value property  `totalTerjual`, yaitu 90 + 37 + 90 + 90