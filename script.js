console.log("start");

// 1-
// let ism = prompt("Ismingizni kiriting");
// let birthday = prompt("Tug‘ilgan sanangizni kiriting (YYYY-MM-DD)");
// function vaqt() {
//   let sana = new Date(birthday);
//   let hozirgiVqat = new Date();
//   let years = hozirgiVqat.getFullYear() - sana.getFullYear();
//   let months = hozirgiVqat.getMonth() - sana.getMonth();
//   let days = hozirgiVqat.getDate() - sana.getDate();
//   let hours = hozirgiVqat.getHours();
//   let minutes = hozirgiVqat.getMinutes();
//   let seconds = hozirgiVqat.getSeconds();
//   if (days < 0) {
//     months--;
//     days += new Date(
//       hozirgiVqat.getFullYear(),
//       hozirgiVqat.getMonth(),
//       0
//     ).getDate();
//   }

//   if (months < 0) {
//     years--;
//     months += 12;
//   }

//   alert(
//     `${ism} siz ${years} yil ${months} oy ${days} kun ${hours} soat ${minutes} minut ${seconds} sekunt yashap qoyipsiz😊`
//   );
// }

// vaqt();

// 2-
// function foo(x, y) {
//   let aaaa = Math.floor(Math.random() * x) + y;
//   console.log(aaaa);
// }
// foo(20, 70);

// 3-
// let gap = prompt("Gapni kiriting:");

// function katta(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// let natija = katta(gap);

// console.log(natija);

// 4-
// let gap = prompt("Gapni kiriting:");

// function foo(str) {
//   let unliy = "eaiouAEIOU";
//   let count = 0;
//   for (let harf of str) {
//     if (unliy.includes(harf)) {
//       count++;
//     }
//   }

//   return count;
// }
// let aaa = foo(gap);
// console.log(`kirtgan (-${gap}-) gapingizda ${aaa} ta unli harf bor.`);

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

// QOSHIMCHA
// 1-
// sonni "musbat" yoki "manfiy" ga tekshiring (℗ ni musbat dep hisoblang) (input:4,7 output-> 4 - musbat | -7 - manfiy)
// function son(a) {
//   if (a >= 0) {
//     return "musbat son";
//   } else if (a < 0) {
//     return "manfiy son";
//   }
// }
// console.log(son(5));

// 2-
//  3 ta son berilgan nechta "musbat" son borligini aniqlang (2,-6,9 -> musbat = 2)
// function son(a, b, c) {
//   let musbat = 0;
//   if (a > 0) musbat++;
//   if (b > 0) musbat++;
//   if (c > 0) musbat++;
//   return musbat;
// }
// console.log(son(2, -6, 9));

// 4-
// sonni "toq" yoki "juft" ga tekshiring
// function son(a) {
//   if (a % 2 === 0) {
//     return "jub";
//   } else {
//     return "toq";
//   }
// }
// console.log(son(1));

// 5-
// agar son toq bo'lsa 2 ga ko'paytiring aks holda 2 ga bo'ling
// function son(a) {
//   if (a % 2 !== 0) {
//     return a * 2;
//   } else if (a % 2 === 0)
//      return a / 2;
// }
// console.log(son(7));

// 7-
// 2 ta son berilgan avval kattasi keyin kichigini qaytaring
// function son(a, b) {
//   if (a > b) {
//     return [a, b];
//   } else if (a < b) {
//     return [b, a];
//   }
// }
// console.log(son(55, 76));

// 8-
// agar son musbat va juft bo'lsa 1 ga oshirilsin aks holda o'zi qaytsin
// function son(a) {
//   if (a >= 0 && a % 2 === 0) {
//     return a + 1;
//   } else {
//     return a;
//   }
// }
// console.log(son(2));
console.log("end");
