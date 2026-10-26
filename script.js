// Luas segitiga
let a = 3;
let t = 6;
const segitiga = 0.5 * a * t;
console.log("segitiga : " + segitiga);

// Luas persegi panjang
let p = 7;
let l = 11;
const persegiPanjang = p * l;
console.log("persegi panjang : " + persegiPanjang);

// Volume prisma segitiga (luas alas x tinggi prisma)
let alas = 7;
let tinggiSegitiga = 10;
let tinggiPrisma = 5;
const prisma = (0.5 * alas * tinggiSegitiga) * tinggiPrisma;
console.log("prisma : " + prisma);

// Volume limas
let la = 9;
let ti = 6;
const limas = 1 / 3 * la * ti;
console.log("limas : " + limas);

// Luas segitiga sembarang (rumus Heron)
let sisiA = 3;
let sisiB = 6;
let sisiC = 4;
function heron() {
    const s = (sisiA + sisiB + sisiC) / 2;
    return Math.sqrt(s * (s - sisiA) * (s - sisiB) * (s - sisiC));
}
console.log("segitiga sembarang : " + heron());