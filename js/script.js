const hewan = {
  nama: "Kambing",
  warna: "Putih",
  "1umur": 11,
  makan() {
    return "Alhamdulillah, Kenyang.";
  },
};

// dot notation
const namaHewan = hewan.nama;
console.log(namaHewan);

// bracket notation
const warnaHewan = hewan["warna"];
console.log(warnaHewan);

// Identifiers
// huruf
// underscore(_) 
// tanda dollar($)

// const umurHewan = hewan.1umur;
const umurHewan = hewan["1umur"];
console.log(umurHewan);
