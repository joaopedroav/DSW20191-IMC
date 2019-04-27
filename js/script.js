function getFormElements() {
    var valores = document.getElementById("valores");
    var peso, altura;
    var imc, output, status, cor;
    peso = parseFloat(valores.elements[0].value);
    altura = parseFloat(valores.elements[1].value);

    imc = parseFloat((peso / (altura * altura)).toFixed(2));

    if (isNaN(imc)) {
        imc = 0;
    }

    if (imc < 18.5) {
        status = "Abaixo do peso";
    } else if ((imc >= 18.5) && (imc <= 24.9)) {
        status = "Peso normal";
    } else if ((imc > 24.9) && (imc <= 29.9)) {
        status = "Sobrepeso";
    } else if ((imc > 29.9) && (imc <= 34.9)) {
        status = "Obesidade grau 1";
    } else if ((imc > 34.9) && (imc <= 39.9)) {
        status = "Obesidade grau 2";
    } else {
        status = "Obesidade grau 3";
    }
    output = "<h3 class='text-thin text-muted'>Resultado</h3> <br/>"
    output += "<h4>" + imc + " — " +  status + "</h4>"
    document.getElementById("resultado").innerHTML = output;
}