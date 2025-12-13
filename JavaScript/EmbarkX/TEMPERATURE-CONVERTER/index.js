document.getElementById('convert').onclick = function(){
    let temp = parseFloat(document.getElementById('temp').value);
    let unit = document.getElementById('unit').value;

    let convertedTemp = unit === "C"
    ? (temp * 9/5) + 32    // Convert C to F
    : (temp - 32) * 5/9    // Convert F to C

    document.getElementById("converted").textContent = convertedTemp.toFixed(2);
}