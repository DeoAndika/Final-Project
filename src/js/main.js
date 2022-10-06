
let footer = {
    penulis: "Deo Andika",
    tahun: 2022,
    lokasi: "Jakarta"
};
document.getElementById("create").innerHTML =
`Create By ${footer.penulis}, ${footer.tahun}, ${footer.lokasi}`;

let manusia = {
    nama: "Deo Andika",
    usia: 23,
    lokasi: "Jakarta"
};  // object, menggunakan kurung kurawal {}
document.getElementById("hasil").innerHTML =
// "Nama: " + manusia.nama + ", Usia: " + manusia.usia + " tahun.";
`Nama: ${manusia.nama}, Usia: ${manusia.usia} tahun, Lokasi: ${manusia.lokasi}`;

