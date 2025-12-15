const unitConverter = {
    mToFt: function(meters) {
        return meters * 3.28084;
    },

    kgToLb: function(kilograms) {
        return kilograms * 2.20462;
    },

    cToF: function(celsius) {
        return celsius * 9/5 + 32;
    },

    ftToIn: function(feet) {
        return feet * 12;
    }
};

document.getElementById('convert').onclick = () => {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let conversionType = document.getElementById('conversionType').value;

    if(!isNaN(inputValue)) {
        let convertedValue = conversionType === 'mToFt' ? unitConverter.mToFt(inputValue) :
            conversionType === 'kgToLb' ? unitConverter.kgToLb(inputValue) :
                conversionType === 'cToF' ? unitConverter.cToF(inputValue) :
                unitConverter.ftToIn(inputValue);

        document.getElementById('convertedValue').textContent = convertedValue.toFixed(2);
    } else {
        alert("Enter a valid number");
    }
};