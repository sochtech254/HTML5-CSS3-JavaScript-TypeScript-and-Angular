let colorPara = document.getElementById("color");
colorPara.textContent = "#FFFFFF";

document.getElementById("generate").onclick = function () {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorPara.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
};