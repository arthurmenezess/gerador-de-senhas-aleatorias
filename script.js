const btnGerar = document.getElementById("btnGerarSenha");
const btnCopiar = document.getElementById("btnCopiarSenha");
const senhaGerada = document.getElementById("senhaGerada");

const passLength = document.getElementById("passLenght");
const letras = document.getElementById("letter");
const numeros = document.getElementById("number");
const simbolos = document.getElementById("symbols");

const result = "";

function getRandomLetter() {

    const charLetter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return charLetter[Math.floor(Math.random() * charLetter.length)];

};

function getRandomNumber() {

    const num = "0123456789";
    return num[Math.floor(Math.random() * num.length)];

};

function getRandomSymbol() {

    const symbols = "!@#$%*{}[]=";
    return symbols[Math.floor(Math.random() * symbols.length)];


};

const randomChar = {
    letter: getRandomLetter,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};


btnGerar.addEventListener("click", () => {
    const lenght = passLength.value;
    const hasLetter = letter.checked;
    const hasNumber = number.checked;
    const hasSymbol = symbols.checked;

    return result.value = generatePasswd(
        hasLetter,
        hasNumber,
        hasSymbol,
        lenght
    );
});

const generatePasswd = (letter, number, symbol, lenght) => {
    let gPasswd = "";

    const typesArr = [{ letter }, { number }, { symbol }].filter(
        (item) => {
            return Object.values(item)[0];
        }
    );

    for (let i = 0; i < lenght; i++) {
        typesArr.forEach((type) => {
            const funcName = Object.keys(type)[0];
            gPasswd += randomChar[funcName]();
        });
    }

    const finalyPasswd = gPasswd.slice(0, lenght);

    senhaGerada.style.display = "block";
    senhaGerada.querySelector("h4").innerText = finalyPasswd;

    btnCopiar.addEventListener("click", () => {
        navigator.clipboard.writeText(finalyPasswd);
        alert("Senha copiada com sucesso: " + finalyPasswd);
    });

};

btnCopiar.addEventListener("click", () => {
    setTimeout(function () {
        location.reload();
    }, 2000);

});
