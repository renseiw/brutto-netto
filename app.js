function calculate() {
    let mwst = parseFloat(document.getElementById('mwst').value);
    let brutto = parseFloat(document.getElementById('brutto').value);
    let netto = parseFloat(document.getElementById('netto').value);

    if (brutto && !isNaN(brutto)) {
        netto = brutto / (1 + mwst);
        document.getElementById('netto').value = netto.toFixed(2);
    } else if (netto && !isNaN(netto)) {
        brutto = netto * (1 + mwst);
        document.getElementById('brutto').value = brutto.toFixed(2);
    } else {
        alert('Bitte geben Sie einen gültigen Wert ein!');
    }
}
