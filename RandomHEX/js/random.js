let button = document.querySelector(".btn");


button.onclick = function () {
let showResult = document.querySelector('.hex');
  let hexMass = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let mass = [];
  let random = 0;
  for (let i = 0; i < 6; i++) {
    random = Math.floor(Math.random() * hexMass.length);
    mass[i] = hexMass[random];
  }
  let result = "#" + mass.join("");

  document.body.style.backgroundColor = result;
  showResult.innerHTML = result;

};
