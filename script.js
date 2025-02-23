const dec = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const inc = document.querySelector(".increase");

let valor = document.querySelector("span");

let num = 0;
valor.innerHTML = num;

inc.addEventListener("click", () => {
    num++;
    valor.innerHTML = num
})

dec.addEventListener("click", () => {
    num--;
    valor.innerHTML = num
})

reset.addEventListener("click", () => {
    num = 0;
    valor.innerHTML = num
})
