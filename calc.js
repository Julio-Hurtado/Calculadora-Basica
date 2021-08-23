const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const options = document.querySelectorAll(".option");
const clear = document.getElementById("clear");
const getResult = document.getElementById("getResult");
let opc;

buttons.forEach((buton) => {
  buton.addEventListener("click", function () {
    result.value += this.value;
    console.log(result.value);
  });
});
//validar que no ingresen letras y caracteres
result.addEventListener("keypress", function (e) {
  if (!soloNumeros(e)) {
    e.preventDefault();
  }
});

//Comprueba si se ha ingresado numeros
function soloNumeros(arg) {
  console.log(arg.keyCode);
  return arg.keyCode >= 48 && arg.keyCode <= 57;
}
//registrar la opción que realizara el usuario
options.forEach((option) => {
  option.addEventListener("click", function () {
    result.value += this.value;
    opc = this.value;
  });
});

//Limpiar el input donde se ingresa la info
(function () {
  clear.addEventListener("click", function () {
    if (result.value != "") {
      result.value = "";
    }
  });
})();

//evaluar la opción que desea realizar el usaurio y ejecutarla
getResult.addEventListener("click", function () {
  if (result.value != "") {
    console.log("Click en el igual");
    switch (opc) {
      case "+":
        sumar();
        break;
      case "-":
        restar();
        break;
      case "*":
        console.log("Multiplicacion");
        multiplicar();
        break;
      case "/":
        console.log("Division");
        dividir();
        break;
      default:
        console.log("Opcion no valida");
        break;
    }
  }
});

function sumar() {
  let arr;
  let res = 0;
  console.log("Suma");
  arr = result.value.split("+");
  res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += Number(arr[i]);
  }
  console.log(arr);
  result.value = res;
  console.log(res);
}

function restar() {
  let arr;
  let res = 0;
  console.log("Resta");
  arr = result.value.split("-");
  res = 0;
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    arr2[i] = Number(element);
  }
  res = arr2.reduce((a, b) => a - b);
  console.log(arr2);
  console.log(res);
  result.value = res;
}
function multiplicar() {
  let arr,
    res = 0;
  arr = result.value.split("*");
  res = arr.reduce((a, b) => Number(a) * Number(b));
  console - console.log(arr, res);
  result.value = res;
}
function dividir() {
  let arr,
    res = 0;
  arr = result.value.split("/");
  res = arr.reduce((a, b) => Number(a) / Number(b));
  console - console.log(arr, res);
  result.value = res;
}
