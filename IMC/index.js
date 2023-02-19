const btnEl = document.getElementById("btn")
const imcInputEl = document.getElementById("resultado-IMC")
const voceEsta = document.getElementById("voce-esta")

function calcularIMC() {

  const heightValue = document.getElementById("altura").value / 100
  const weightValue = document.getElementById("peso").value

  const imcValue = weightValue / (heightValue * heightValue)

  imcInputEl.value = imcValue

  if (imcValue < 18.5) {
    voceEsta.innerText = "abaixo do peso";
  } else if (imcValue >= 18.5 && imcValue <= 24.9) {
    voceEsta.innerText = "no peso ideal";
  } else if (imcValue >= 25 && imcValue <= 29.9) {
    voceEsta.innerText = "acima do peso";
  } else if (imcValue => 30) {
    voceEsta.innerText = "obeso";
  }
}
btnEl.addEventListener("click", calcularIMC)