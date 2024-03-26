var posicaoSuperior = 70,
    posicaoEsquerda = 0,
    anguloAvatar = 0;

const posicaoSuperiorInicial = posicaoSuperior,
    posicaoEsquerdaInicial = posicaoEsquerda,
    posicaoSuperiorFinal = 500,
    posicaoEsquerdaFinal = 500,
    anguloInicial = 0,
    anguloFinal = 360,
    imgAvatar = document.getElementById('imgAvatar'),
    styleAvatar = window.getComputedStyle(imgAvatar),
    txtPixel = document.getElementById("txtPixel"),
    txtIntervaloTempo = document.getElementById("txtIntervaloTempo");

imgAvatar.style.position = "absolute";
imgAvatar.style.marginTop = posicaoSuperior + "px";
imgAvatar.style.top = "0px";
imgAvatar.style.marginLeft = posicaoEsquerda + "px";
imgAvatar.style.left = "0px";
imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";

function moverParaEsquerda() {
    console.clear();
    console.log("Posição do avatar à esquerda antes: ", posicaoEsquerda + "px");
    if (posicaoEsquerda > posicaoEsquerdaInicial) {
        posicaoEsquerda -= parseInt(txtPixel.value);
        if (posicaoEsquerda < posicaoEsquerdaInicial) {
            posicaoEsquerda = posicaoEsquerdaInicial;
        }
        imgAvatar.style.marginLeft = posicaoEsquerda + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para esquerda. Tente outro botão.");
    }
    console.log("Posição do avatar à esquerda depois: ", posicaoEsquerda + "px");
}

function moverParaDireita() {
    console.clear();
    console.log("Posição do avatar à esquerda antes: ", posicaoEsquerda + "px");
    if (posicaoEsquerda < posicaoEsquerdaFinal) {
        posicaoEsquerda += parseInt(txtPixel.value);
        if (posicaoEsquerda > posicaoEsquerdaFinal) {
            posicaoEsquerda = posicaoEsquerdaFinal;
        }
        imgAvatar.style.marginLeft = posicaoEsquerda + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para direita. Tente outro botão.");
    }
    console.log("Posição do avatar à esquerda depois: ", posicaoEsquerda + "px");
}

function moverParaCima() {
    console.clear();
    console.log("Posição superior do avatar antes: ", posicaoSuperior + "px");
    if (posicaoSuperior > posicaoSuperiorInicial) {
        posicaoSuperior -= parseInt(txtPixel.value);
        if (posicaoSuperior < posicaoSuperiorInicial) {
            posicaoSuperior = posicaoSuperiorInicial;
        }
        imgAvatar.style.marginTop = posicaoSuperior + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para cima. Tente outro botão.");
    }
    console.log("Posição superior do avatar depois: ", posicaoSuperior + "px");
}

function moverParaBaixo() {
    console.clear();
    console.log("Posição superior do avatar antes: ", posicaoSuperior + "px");
    if (posicaoSuperior < posicaoSuperiorFinal) {
        posicaoSuperior += parseInt(txtPixel.value);
        if (posicaoSuperior > posicaoSuperiorFinal) {
            posicaoSuperior = posicaoSuperiorFinal;
        }
        imgAvatar.style.marginTop = posicaoSuperior + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para cima. Tente outro botão.");
    }
    console.log("Posição superior do avatar depois: ", posicaoSuperior + "px");
}

function girarHorario() {
    console.clear();
    console.log("Ângulo do avatar antes: ", anguloAvatar + "deg");
    if (anguloAvatar < anguloFinal) {
        anguloAvatar += parseInt(txtPixel.value);
        if (anguloAvatar > anguloFinal) {
            anguloAvatar = anguloFinal;
        }
        imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais girar no sentido horário. Tente outro botão.");
    }
    console.log("Ângulo do avatar depois: ", anguloAvatar + "deg");
}

function girarAntiHorario() {
    console.clear();
    console.log("Ângulo do avatar antes: ", anguloAvatar + "deg");
    if (anguloAvatar > anguloInicial) {
        anguloAvatar -= parseInt(txtPixel.value);
        if (anguloAvatar < anguloInicial) {
            anguloAvatar = anguloInicial;
        }
        imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais girar no sentido horário. Tente outro botão.");
    }
    console.log("Ângulo do avatar depois: ", anguloAvatar + "deg");
}

function deslizarParaDireita() {
    console.clear();
    var doSetInterval;

    if (posicaoEsquerda > posicaoEsquerdaFinal) {
        posicaoEsquerda = posicaoEsquerdaFinal;
    }

    const moverImgParaDireita = () => {
        posicaoEsquerda += parseInt(txtPixel.value);
        if (posicaoEsquerda > posicaoEsquerdaFinal) {
            posicaoEsquerda = posicaoEsquerdaFinal;
        }
        if (posicaoEsquerda <= posicaoEsquerdaFinal) {
            imgAvatar.style.transition = "margin-left " + txtIntervaloTempo.value + "ms ease-in-out";
            imgAvatar.style.marginLeft = posicaoEsquerda + "px";
        }
        if (posicaoEsquerda == posicaoEsquerdaFinal) {
            clearInterval(doSetInterval);
        }
    }

    if (posicaoEsquerda <= posicaoEsquerdaFinal) {
        doSetInterval = setInterval(moverImgParaDireita, parseInt(txtIntervaloTempo.value));
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais girar no sentido horário. Tente outro botão.");
    }
}
