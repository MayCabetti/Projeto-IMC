let peso = Number(prompt("Insira seu peso (kg):"));
let altura = Number(prompt("Insira sua altura (m):"));
let IMC = peso/(altura ** 2);

if (IMC < 18.5){
    alert("Abaixo do peso");
} else if (IMC >= 18.5 && IMC <= 24.9){
    alert("Peso normal");
} else if (IMC >= 25 && IMC <= 29.9) {
    alert ("Sobrepeso");
} else {
    alert("Obesidade");
}