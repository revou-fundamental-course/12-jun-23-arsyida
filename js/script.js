function validateForm() {
    var input = document.forms["kalkulator-form"]["input"].value; //mengambil nilai inputan
    var output = document.getElementById("output"); //mengambil value output di html
    var cara = document.getElementById("cara"); //menampilakn value cara di html

    if ( input == "" ) {
        alert("Input tidak boleh kosong"); //menampilkan ini jika input kosong
    } else {
        if (celcius.textContent == "Celcius (°C):"){
            convertCelcius(input, output, cara); //jika inputan celcius, masuk ke fungsi convertCelcius()
        } else {
            convertFahrenheit(input, output, cara); //jika inputan fahrenheit, masuk ke fungsi convertFahrenheit()
        }
    }

    return false;
}

function convertCelcius(input, output, cara){
    var hasil = input * (9/5) + 32; //menghitung hasil konversi celcius ke fahrenheit
    output.innerText = hasil + "\u00b0F"; //mengembalikan nilai output dalam bentuk string
    cara.innerText = input + "\u00b0C * (9/5) + 32 = " + hasil; //mengembalikan nilai cara dalam bentuk string

    return false;
}

function convertFahrenheit(input, output, cara) {
    var hasil = (5/9) * (input - 32); //menghitung hasil konversi fahrenheit ke celcius
    output.innerText = hasil + "\u00b0F"; 
    cara.innerText = "(5/9) * (" + input + " \u00b0F - 32) = " + hasil;

    return false;
}

function riset(){
    output.innerText = ""; //mengembalikan nilai input dalam bentuk string kosong
    cara.innerText = ""; 
}

function reverse(){
    var celcius = document.getElementById("celcius"); //mengambil value dari element tersebut di html
    var fahrenheit = document.getElementById("fahrenheit"); 
    var caraKonversi = document.getElementById("caraKonversi"); 
    var header = document.getElementById("header"); 

    if (celcius.textContent == "Celcius (°C):") { //jika teks celcius = "Celcius (°C):" jalankan baris kode di bawah
        celcius.textContent = "Fahrenheit (°F):"; //ubah menjadi inputan fahrenheit
        fahrenheit.textContent = "Celcius (°C):";
        caraKonversi.innerHTML = "<h2>Cara Konversi Dari Fahrenheit (&deg;F) ke Celcius (&deg;C)</h2><hr> <p>Suhu<i>S</i>dalam derajat Celcius (&deg;C) sama dengan 5/9 kali suhu<i>S</i>dalam derajat Fahrenheit (&deg;F) kurang 32.</p> <p><i>S</i><sub>(&deg;C)</sub> = 5/9 (<i>S</i><sub>(&deg;F)</sub> - 32)</p> <p>atau</p> <p><i>S</i><sub>(&deg;C)</sub> = 0.55 (<i>S</i><sub>(&deg;F)</sub> - 32)</p>";
        header.innerHTML = "<h1>KALKULATOR KONVERSI SUHU</h1> <p>Masukkan suhu derajat Fahrenheit (&deg;F) ke kotak dibawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Celcius (&deg;C).</p>";
    } else { //jika tidak jalankan baris kode di bawah
        celcius.textContent = "Celcius (°C):";
        fahrenheit.textContent = "Fahrenheit (°F):";
        caraKonversi.innerHTML = "<h2>Cara Konversi Dari Celcius (&deg;C) ke Fahrenheit (&deg;F)</h2><hr> <p>Suhu<i>S</i>dalam derajat Fahrenheit (&deg;F) sama dengan suhu<i>S</i>dalam derajat Celcius (&deg;C) kali 9/5 tambah 32.</p> <p><i>S</i><sub>(&deg;F)</sub> = (<i>S</i><sub>(&deg;C)</sub> x 9/5) + 32</p> <p>atau</p> <p><i>S</i><sub>(&deg;F)</sub> = (<i>S</i><sub>(&deg;C)</sub> x 1.8) + 32</p>";
        header.innerHTML = "<h1>KALKULATOR KONVERSI SUHU</h1> <p>Masukkan suhu derajat Celcius (&deg;C) ke kotak dibawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (&deg;F).</p>";
    }
    return false;
}
