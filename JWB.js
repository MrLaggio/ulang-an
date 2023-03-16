//no 1
// function cetakFunction(a){
//     return `hallo nama saya ` + a
// }

// console.log(cetakFunction("Iaka"));

//no 2
function tambah (a, b){
    return a+b
}

let angka1 = 20;
let angka2 = 7;

let output = tambah(angka1, angka2);

console.log (output);

//no 3

Hello = () =>  { 
    return "Hello ";
};                    

console.log(Hello);

//no 4

let manusia = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia"
};

console.log(manusia.bahasa);


//no 5

let array = ["John Doe", "laki laki", "baca buku", "1992"]

let object = {
    nama : array [0],
    kelamin : array [1],
    hobi : array [2],
    tahun : array [3]
}

console.log(array)

//no 6

let buah = [
    {
    nama : "nanas",
    warna : "kuning",
    adaBijinya : "tidak",
    harga : 9000,
},{
    nama : "jeruk",
    warna : "orange",
    adaBijinya : "ada",
    harga : 8000,
},{
    nama : "semangka",
    warna : "hijau & merah",
    adaBijinya : "ada",
    harga : 10000,
},{
    nama : "pisang",
    warna : "kuning",
    adaBijinya : "tidak",
    harga :1000,
},
];

sortNama = ["nanas", "jeruk", "semangka", "pisang"];

let berbiji = buah.filter((buah) => buah.adaBijinya === "tidak");
console.log(berbiji); 

console.log(sortNama.sort());

              