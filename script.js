function calcular(operacao) {
    var num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    var resultado = document.getElementById("resultado");


    if (num1 === "" || num2 === "") {
        alert("Não é possível calcular sem preencher os campos corretamente.");
        return;
    }

    if (operacao === "3" && num3 === "") {
        alert("Não é possível calcular sem informar a espessura do tubo.");
        return;
    }

    // Formula barra Redonda
    const barR = 0.0062;
    let fBarR = (num1 * num1) * barR * num2;
    var pesoR = fBarR;

    //Formula Barra Quadrada
    const barQ = 0.0079;
    let fBarQ = (num1 * num1) * barQ * num2;
    var pesoQ = fBarQ;

    //Formula Tubo
    const tubo = 0.02466;
    let fTubo = (num1 * num1) * num3 * tubo * num2;
    var pesoT = fTubo;

    // Resultados tratados em Gramas , KG e Tonelada.
    switch (operacao) {
        case "1":
            resultado.value = parseFloat(pesoR).toFixed(0);
            if (resultado.value.toString().split(".")[0].length === 4) {
                resultado.value = resultado.value.replace(".", ",");
                resultado.value = resultado.value.replace(/(\d{1})(\d{3})/, '$1.$2') + " KG";
            }
            else if (resultado.value.toString().split(".")[0].length <= 3) {
                resultado.value += " g";
            }
            else if (resultado.value.toString().split(".")[0].length === 5) {
                resultado.value = resultado.value.replace(".", ",");
                resultado.value = resultado.value.replace(/(\d{2})(\d{1,})/, '$1.$2') + " KG";
            }
            else if (resultado.value.toString().split(".")[0].length === 6) {
                resultado.value = resultado.value.replace(".", ",");
                resultado.value = resultado.value.replace(/(\d{3})(\d{1,})/, '$1.$2') + " KG";
            }
            else if (resultado.value.toString().split(".")[0].length > 6) {
                resultado.value = (parseFloat(resultado.value) / 1000).toFixed(0).replace(".", ",");
                resultado.value += " T";
            }
            break;

        case "2":
            resultado.value = parseFloat(pesoQ).toFixed(0);
            if (resultado.value.toString().split(".")[0].length === 4) {
                resultado.value = resultado.value.replace(".", ",");
                resultado.value = resultado.value.replace(/(\d{2})(\d{1,})/, '$1.$2');
            }
            else if (resultado.value.toString().split(".")[0].length <= 3) {
                resultado.value += " g";
            }
            else if (resultado.value.toString().split(".")[0].length === 5) {
                resultado.value = resultado.value.replace(".", ",");
                resultado.value = resultado.value.replace(/(\d{2})(\d{1,})/, '$1.$2') + " KG";
            }
            else if (resultado.value.toString().split(".")[0].length === 6) {
                resultado.value = resultado.value.replace(".", ",");
                resultado.value = resultado.value.replace(/(\d{3})(\d{1,})/, '$1.$2') + " KG";
            }
            else if (resultado.value.toString().split(".")[0].length > 6) {
                resultado.value = (parseFloat(resultado.value) / 1000).toFixed(0).replace(".", ",");
                resultado.value += " T";
            }
            break;

        case "3":
            resultado.value = parseFloat(pesoT).toFixed(0);
            if (resultado.value.toString().split(".")[0].length === 4) {
                resultado.value = resultado.value.replace(".", ",");
                resultado.value = resultado.value.replace(/(\d{2})(\d{1,})/, '$1.$2');
            }
            else if (resultado.value.toString().split(".")[0].length <= 3) {
                resultado.value += " g";
            }
            else if (resultado.value.toString().split(".")[0].length === 5) {
                resultado.value = resultado.value.replace(".", ",");
                resultado.value = resultado.value.replace(/(\d{2})(\d{1,})/, '$1.$2') + " KG";
            }
            else if (resultado.value.toString().split(".")[0].length === 6) {
                resultado.value = resultado.value.replace(".", ",");
                resultado.value = resultado.value.replace(/(\d{3})(\d{1,})/, '$1.$2') + " KG";
            }
            else if (resultado.value.toString().split(".")[0].length > 6) {
                resultado.value = (parseFloat(resultado.value) / 1000).toFixed(0).replace(".", ",");
                resultado.value += " T";
            }

            break;
    }
}

function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("resultado").value = "";
}

var info = document.getElementById("info");

info.addEventListener("click", function () {
    var mensagem = document.querySelector(".mensagem");

    if (mensagem) {
        mensagem.parentNode.removeChild(mensagem);
    } else {
        mensagem = document.createElement("div");
        mensagem.textContent = "Esta calculadora informa o peso da barra ou tubo de aço conforme diametro e comprimento informado.";
        mensagem.classList.add("mensagem");
        document.body.appendChild(mensagem);

        mensagem.addEventListener("click", function (event) {
            mensagem.parentNode.removeChild(mensagem);
        });
    }
});




