function hitungLuas() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (!isNaN(base) && !isNaN(height)) {
        var luas = 0.5 * base * height;
        document.getElementById('result').innerHTML = 'Luas segitiga: ' + luas;
    } else {
        document.getElementById('result').innerHTML = 'Masukkan alas dan tinggi dengan benar.';
    }
}

function hitungKeliling() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (!isNaN(base) && !isNaN(height)) {
        var sisiMiring = Math.sqrt(base**2 + height**2);
        var keliling = base + height + sisiMiring;
        document.getElementById('result').innerHTML = 'Keliling segitiga: ' + keliling;
    } else {
        document.getElementById('result').innerHTML = 'Masukkan alas dan tinggi dengan benar.';
    }
}
