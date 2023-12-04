function hitungLuas() {
    var alas = parseFloat(document.getElementById('inputAlas').value);
    var tinggi = parseFloat(document.getElementById('inputTinggi').value);
    var hasil = document.getElementById('hasilLuas');

    if (!isNaN(alas) && !isNaN(tinggi)) {
        var luas = 0.5 * alas * tinggi;
        if (hasil.style.opacity === '' || hasil.style.opacity === '0.5') {
            hasil.style.opacity = '1';
            hasil.innerHTML = 'Luas segitiga: ' + luas;
        } else {
            hasil.style.opacity = '1';
            hasil.innerHTML = 'Luas segitiga: ' + luas;
        }
    } else {
        if (hasil.style.opacity === '' || hasil.style.opacity === '0.5') {
            hasil.style.opacity = '1';
            hasil.innerHTML = 'Masukkan alas dan tinggi dengan benar.';
        } else {
            hasil.style.opacity = '1';
            hasil.innerHTML = 'Masukkan alas dan tinggi dengan benar.';
        }
    }
}

function hapusDataLuas() {
    var inputAlas = document.getElementById('inputAlas');
    var inputTinggi = document.getElementById('inputTinggi');
    var hasil = document.getElementById('hasilLuas');

    inputAlas.value = '';
    inputTinggi.value = '';
    if (hasil.style.opacity === '' || hasil.style.opacity === '1') {
        hasil.style.opacity = '0.5';
        hasil.innerHTML = 'HASIL';
    } else {
        hasil.style.opacity = '0.5';
        hasil.innerHTML = 'HASIL';
    }
}

function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById('inputs1').value);
    var sisi2 = parseFloat(document.getElementById('inputs2').value);
    var sisi3 = parseFloat(document.getElementById('inputs3').value);
    hasil = document.getElementById('hasilKeliling');
    
    if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        var keliling = sisi1 + sisi2 + sisi3;
        if (hasil.style.opacity === '' || hasil.style.opacity === '0.5') {
            hasil.style.opacity = '1';
            hasil.innerHTML = 'Keliling segitiga: ' + keliling;
        } else {
            hasil.style.opacity = '1';
            hasil.innerHTML = 'Keliling segitiga: ' + keliling;
        }
    } else {
        if (hasil.style.opacity === '' || hasil.style.opacity === '0.5') {
            hasil.style.opacity = '1';
            hasil.innerHTML = 'Masukkan nilai untuk sisi dengan benar.';
        } else {
            hasil.style.opacity = '1';
            hasil.innerHTML = 'Masukkan nilai untuk sisi dengan benar.';
        }
    }
}

function hapusDataKeliling() {
    var inputs1 = document.getElementById('inputs1');
    var inputs2 = document.getElementById('inputs2');
    var inputs3 = document.getElementById('inputs3');
    var hasil = document.getElementById('hasilKeliling');

    inputs1.value = '';
    inputs2.value = '';
    inputs3.value = '';
    if (hasil.style.opacity === '' || hasil.style.opacity === '1') {
        hasil.style.opacity = '0.5';
        hasil.innerHTML = 'HASIL';
    } else {
        hasil.style.opacity = '0.5';
        hasil.innerHTML = 'HASIL';
    }
}