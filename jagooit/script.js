"use strict";
// ====Introduction====
// Contoh penggunaan Komentar
// Data type
let x = 2;
let y = 5;

// ===var===
var kalimat = "Latihan nih";

console.log(`Kalimat = ${kalimat}`);

kalimat = "Udah di edit nih";
console.log(`Kalimat (edited) = ${kalimat}`);

// hoisting
var angka;
console.log(angka);
angka = 11;

// ===let===
let kalimat2 = "Penggunaan let";

console.log(`Kalimat = ${kalimat2}`);


// ===const===
const kalimat3 = "Contoh penggunaan const";
console.log(`Kalimat = ${kalimat3}`);

// kalimat3 = "Deklarasi ulang const";
// console.log(`Kalimat (edited) = ${kalimat3}`);

// latihan
let lath = `Hello what's up good people`;

let funclet = (rep = 'Yow') => {
    console.log(lath);
    let mod = 6;
    if (mod % 2 == 0) { // modulasi
        let lath_replace = lath.replace('Hello', rep);
        console.log(lath_replace);
    }
}

funclet('Hi');

// ====Conditional====
// If
let nilai = 84;
if(nilai >= 80 && nilai < 100){
    console.log('Anda lulus dengan nilai A');
} else if (nilai >= 73 && nilai < 80) {
    console.log('Anda lulus dengan nilai AB');
} else if (nilai >= 65 && nilai < 73) {
    console.log('Anda lulus dengan nilai B');
} else if (nilai >= 60 && nilai < 65) {
    console.log('Anda lulus dengan nilai BC');
} else if (nilai >= 50 && nilai < 60) {
    console.log('Anda lulus dengan nilai C');
} else if (nilai >= 40 && nilai < 50) {
    console.log('Anda lulus dengan nilai D');
} else if (nilai >= 0  && nilai < 40) {
    console.log('Anda tidak lulus');
} 

// switch
var processor = 'amd';

switch (processor) {
   case 'intel':
        console.log('Intel Corporation merupakan perusahaan yang bergerak dalam bidang penyedia chip semikonduktor dengan produk utama-nya perangkat dan komputer pribadi, prosesor, motherboard, chipset, komponen server, produk ethernet, nirkabel, barang elektronik konsumen, solid state drive dan produk-produk lainnya.');
        break;
   case 'amd':
        console.log('Advanced Micro Devices, Inc. (AMD) adalah perusahaan semikonduktor multinasional Amerika yang berbasis di Santa Clara, California, yang mengembangkan prosesor komputer dan teknologi terkait untuk bisnis dan pasar konsumen.');
        break;
   default:
        console.log('Pilihan processor gaada cuy');
}

// Latihan 2
let provider = 'tri';
let pulsa = 50000;
switch (provider) {
    case 'tri':
        if(pulsa >= 45000 && pulsa < 55000){
            var harga = 45000;
            console.log('Anda mendapatkan paket AON 9GB');
        } else if (pulsa >= 31000 && pulsa < 45000) {
            var harga = 31000;
            console.log('Anda mendapatkan paket AON 6GB');
        } else if (pulsa >= 21000 && pulsa < 31000) {
            var harga = 21000;
            console.log('Anda mendapatkan paket AON 3.5GB');
        } else if (pulsa >= 15500 && pulsa < 21000) {
            var harga = 15500;
            console.log('Anda mendapatkan paket AON 2.5GB');
        } else {
            var harga = 0;
            console.log('Wahh paket data belum ada');
        } 
        break;
    case 'xl':
        if(pulsa >= 43000 && pulsa < 62000){
            var harga = 43000;
            console.log('Anda mendapatkan paket XTRA COMBO Flex M 12GB');
        } else if (pulsa >= 20000 && pulsa < 43000) {
            var harga = 20000;
            console.log('Anda mendapatkan paket XTRA COMBO Flex S 4.5GB');
        } else {
            var harga = 0;
            console.log('Wahh paket data belum ada');
        } 
        break;
    case 'indosat':
        if(pulsa >= 42000 && pulsa < 64000){
            var harga = 420000
            console.log('Anda mendapatkan paket Freedom Combo 10GB');
        } else if (pulsa >= 31000 && pulsa < 42000) {
            var harga = 31000;
            console.log('Anda mendapatkan paket Freedom Combo 6GB');
        } else {
            var harga = 0;
            console.log('Wahh paket data belum ada');
        } 
        break;
    default:
        var harga = 0;
        console.log('Wah paket provider masih belum tersedia');
        break;
}

console.log(`Harga : ${harga}`);
console.log(`Sisa Pulsa : ${pulsa - harga}`);

// ====Looping====
// while
var counter = 10;

while(counter >= 1){
    console.log(`counter = ${counter}`);
	counter--;
}

// do while
var counter2 = 10;

do{
    console.log(`counter2 = ${counter2}`);
	counter2--;
} while(counter2 >=1) ;


// for
var counter3;

for(counter3=10; counter3>=1; counter3--){
    console.log(`counter3 = ${counter3}`);
}

// latihan3
var bintang = 5;

while(bintang >= 1){
    let bp = bintang;
    let print ='';
    if(bintang > 3){
        do{
            print += '*';
            bp--;
        } while(bp >=1) ;
        console.log(print);
    } else {
        for(bp; bp>=1; bp--){
            print += '*';
        }
        console.log(print);
    }
	bintang--;
}

// ====Array====
// array
let provider_list = ['Tri', 'XL', 'Indosat', 'Telkomsel'];
console.log(`Provider List = ${provider_list}`);

provider_list.shift();
console.log(`Provider List (shift) = ${provider_list}`);

provider_list.unshift('Smartfren');
console.log(`Provider List (unshift) = ${provider_list}`);

provider_list.splice(1, 1, 'By.U');
console.log(`Provider List (splice) = ${provider_list}`);

provider_list.push('Axis');
console.log(`Provider List (push) = ${provider_list}`);

let new_provider = ['Live.on', 'Switch']
provider_list = provider_list.concat(new_provider);
console.log(`Provider List (concat) = ${provider_list}`);

provider_list.forEach( (item, index) => {
    console.log(`Provider ${index+1} = ${item}`);
});

//array-object
var myProvider = {name: 'By.U', rating: 4, "total users": 4600000};
myProvider.rating = 4.5;
myProvider["ceo"] = 'Emma Sri Martini';

for (var key in myProvider) {
  console.log("key " + key + " has value " + myProvider[key]);
}

// latihan 4
let karyawan = [
    {
        nama: 'Budi',
        username: 'BDI',
        nomor_induk: 10981
    },
    {
        nama: 'Maman',
        username: 'MMN',
        nomor_induk: 10982
    },
    {
        nama: 'Ridwan',
        username: 'RDW',
        nomor_induk: 10983
    },
];

karyawan.forEach((item, index) => {
    if (item.username == 'RDW') {
        console.log(`Nama: ${item.nama}`);
        console.log(`Nomor Induk: ${item.nomor_induk}`);
    }
});

function search_karyawan() {
    Swal.fire({
        title: 'Cari karyawan by username',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Search',
    }).then((result) => {
        if(result.value){
            let src_index = karyawan.map(item => item.username).indexOf(result.value);
    
            if (src_index == -1) {
                Swal.fire({
                    title: 'Hasil tidak ditemukan!',
                    icon: 'error',
                })        
            } else {
                Swal.fire({
                    title: 'Hasil pencarian:',
                    html: `Nama: ${karyawan[src_index].nama} <br> Nomor Induk: ${karyawan[src_index].nomor_induk}`
                })
            }
        }
    })    
}


// ====Function====
// function
function timer_func() {
    Swal.fire({
        title: 'Berhasil!',
        text:'Code berhasil di execute',
        icon: 'success',
    })   
}

function delay() {
    let timer = setTimeout(timer_func, 3000);
}

// arrow function
let example = () => {
    return "Example of arrow function";
}

console.log(example());

// latihan 5
function by_username(query){
    let src_index = karyawan.map(item => item.username).indexOf(query);
    
    return karyawan[src_index];
}

let get_karyawan = (username) => {
    let kry = by_username(username);
    console.log(`Nama: ${kry.nama}`);
    console.log(`Nomor Induk: ${kry.nomor_induk}`);
}

get_karyawan('BDI');

// ====Function====
// object
class Player {
    constructor(x, y, z){
        this.fullName = x, 
        this.nickName = y,
        this.role = z,
        this.changeNickname = function(a) {
            this.nickName = a
        },
        this.getInfo = function() {
            return `Fullname: ${this.fullName} \nNickname: ${this.nickName} \nRole: ${this.role}`
        }
    }
 }
 
let Fad = new Player("Fadilah Muhammad","chaotiX_", "Duelist");
console.log(Fad.nickName);

console.log(Fad.getInfo());

Fad.changeNickname('PRX chaotiX_');
console.log(Fad.getInfo());
 
// inheritance
class PaketData{
    constructor(){
        this.aktif = 30;
        this.kuota = 10;
        this.getMasaAktif = function () {
            return `Masa aktif paket: ${this.aktif} Hari`
        }
        this.getKuota = function () {
            return `Sisa kuota utama: ${this.kuota} GB`
        }
  }  
}

class XtraNelp extends PaketData{
	constructor(){
	    super();  
        this.free_telp = 60;
        this.price = 45000;
	}  
}

var paket = new XtraNelp();

console.log(paket);

console.log(paket.getKuota());

// latihan 6
class PaketProvider{
    constructor(provider, nama_paket){
        this.provider = provider;
        this.nama_paket = nama_paket;
  }  
}

class Bulanan extends PaketProvider{
	constructor(provider, nama_paket, harga, kuota){
	    super(provider, nama_paket);  
        this.aktif = 60;
        this.harga = harga;
        this.kuota = kuota;
	}  
}

let bulanan1 = new Bulanan('Tri', 'AON', 45000, 9);
let bulanan2 = new Bulanan('Tri', 'AON', 60000, 12);

console.log(bulanan1);
console.log(bulanan2);

// ====HTML + JAVASCRIPT====
function fungsiKu1(x) {
    if(document.getElementById("a1").checked==true && document.getElementById("a2").checked==false){
        document.getElementById("output").innerHTML = 'Pria'}
    
    else if(document.getElementById("a1").checked==false && document.getElementById("a2").checked==true){
        document.getElementById("output").innerHTML = 'Wanita'}
    
    else if(document.getElementById("a1").checked==true && document.getElementById("a2").checked==true){
        document.getElementById("output").innerHTML = 'Pria & Wanita'}
    
    else{document.getElementById("output").innerHTML = ''}
}

// latihan 7
let click_counter = 0;

function toast_counter() {
    click_counter++;
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        icon: 'success',
        title: `Clicked ${click_counter} times!`
    })
}

// latihan 8
function change_color(value) { 
    document.querySelector('#hover-box').style.background = value;
}

let bg_cycle = ['bg-primary', 'bg-secondary', 'bg-danger', 'bg-success', 'bg-info'];
let bg_index = 0;
function bg_class() { 
    return bg_cycle[bg_index%bg_cycle.length]
}

function hoverIn() { 
    document.querySelector('#hover-box').classList.add(bg_class());
}

function hoverOut() { 
    document.querySelector('#hover-box').classList.remove(bg_class());
    bg_index++;
}

// latihan 9
function getTodo() {
    let stored = localStorage.getItem("todo_list");
    try {
        return JSON.parse(stored);
    } catch (err) {
        console.log('Todo List Empty');
        return [];
    }
}

function init_list() {  
    var storedTodo = getTodo();
    let element='';
    if (storedTodo != null) {
        storedTodo.forEach((item, index) => {
            element += 
                `<tr>
                    <td class="align-middle">${item}</td>
                    <td align="middle"><button type="button" onclick="deleteTodo(${index})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button></td>
                </tr>`;
            });
        document.getElementById("todo_table").innerHTML = element;        
    }
}
init_list();

function deleteTodo(index) {  
    let storedTodo = getTodo();
    storedTodo.splice(index, 1);
    localStorage.setItem("todo_list", JSON.stringify(storedTodo));
    init_list();
}

function addTodo() {
    let input_task = document.getElementById("todo_input");
    if (input_task.value != '') {
        var storedTodo = getTodo();
        if (storedTodo != null) {
            storedTodo.push(input_task.value);
        } else {
            storedTodo = [input_task.value]
        }
        localStorage.setItem("todo_list", JSON.stringify(storedTodo));
        input_task.value = '';
        init_list();        
    }
}