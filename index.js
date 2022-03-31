let cards = [
  "6a",
  "6g",
  "6j",
  "6k",
  "7a",
  "7g",
  "7j",
  "7k",
  "8a",
  "8g",
  "8j",
  "8k",
  "9a",
  "9g",
  "9j",
  "9k",
  "10a",
  "10g",
  "10j",
  "10k",
  "va",
  "vg",
  "vj",
  "vk",
  "da",
  "dg",
  "dj",
  "dk",
  "ka",
  "kg",
  "kj",
  "kk",
  "ta",
  "tg",
  "tj",
  "tk",
];
let R = Math.floor(Math.random() * 36); // R -  Random pirveli karti
let first_card = points(R);
let I = 0; // I - images counter
document.images[I].src = "deck/" + cards[R] + ".gif";
function Shecvla() {
  let z = Math.floor(Math.random() * 36);
  document.images[I].src = "deck/" + cards[z] + ".gif";
  document.getElementById("shecvla").disabled = true;
}
function Zemot() {
  I++;
  let z = Math.floor(Math.random() * 36);
  document.images[I].src = "deck/" + cards[z] + ".gif";
  let magali = points(z);
  if (magali > first_card) {
    document.getElementById("result").innerHTML = "არის მაღალი! :)";
    document.getElementById("result").style.color = "purple";
    first_card = magali;
  } else {
    document.getElementById("result").innerHTML = "არ არის მაღალი!";
    document.getElementById("game_over").innerHTML =
      "სამწუხაროდ თქვენ წააგეთ. :(";
    document.getElementById("result").style.color = "red";
    document.getElementById("game_over").style.color = "blue";
    document.getElementById("shecvla").disabled = true;
    document.getElementById("zemot").disabled = true;
    document.getElementById("qvemot").disabled = true;
  }
}
function Qvemot() {
  I++;
  let z = Math.floor(Math.random() * 36);
  document.images[I].src = "deck/" + cards[z] + ".gif";
  let dabali = points(z);
  if (dabali < first_card) {
    document.getElementById("result").innerHTML = "არის დაბალი!!!";
    document.getElementById("result").style.color = "purple";
    first_card = dabali;
  } else {
    document.getElementById("result").innerHTML = "არ არის დაბალი!!!";
    document.getElementById("game_over").innerHTML = "სამწუხაროდ თქვენ წააგეთ.";
    document.getElementById("result").style.color = "red";
    document.getElementById("game_over").style.color = "blue";
    document.getElementById("shecvla").disabled = true;
    document.getElementById("zemot").disabled = true;
    document.getElementById("qvemot").disabled = true;
  }
}
function points(Z) {
  let point = 0;
  if (cards[Z].substring(0, 1) == "6") {
    point = 6;
  }
  if (cards[Z].substring(0, 1) == "7") {
    point = 7;
  }
  if (cards[Z].substring(0, 1) == "8") {
    point = 8;
  }
  if (cards[Z].substring(0, 1) == "9") {
    point = 9;
  }
  if (cards[Z].substring(0, 1) == "1") {
    point = 10;
  }
  if (cards[Z].substring(0, 1) == "v") {
    point = 11;
  }
  if (cards[Z].substring(0, 1) == "d") {
    point = 12;
  }
  if (cards[Z].substring(0, 1) == "k") {
    point = 13;
  }
  if (cards[Z].substring(0, 1) == "t") {
    point = 14;
  }
  console.log("Z=" + Z + " point=" + point);
  return point;
}
