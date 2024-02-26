var count = 0;

function myfunction(x){
    var x;
    if (x== 1){
        count=count+1;
    }
    if (count == 1){
        document.getElementById("change").style.background="#FAFF00";
        document.getElementById("ganti1").textContent="Siap Diantar";
    }
    else if(count == 2){
        document.getElementById("change").style.background="#00FF38";
        document.getElementById("ganti1").textContent="Sudah Diantar";

    }
    else if(count == 3) {
        document.getElementById("change").style.background="#F00";
        document.getElementById("ganti1").textContent="Diproses";
        count=0;
    }
}
var count = 0;

function myfunction2(x){
    var x;
    if (x== 1){
        count=count+1;
    }
    if (count == 1){
        document.getElementById("change2").style.background="#FAFF00";
        document.getElementById("ganti2").textContent="Siap Diantar";
    }
    else if(count == 2){
        document.getElementById("change2").style.background="#00FF38";
        document.getElementById("ganti2").textContent="Sudah Diantar";

    }
    else if(count == 3) {
        document.getElementById("change2").style.background="#F00";
        document.getElementById("ganti2").textContent="Diproses";
        count=0;
    }
}
var count = 0;

function myfunction3(x){
    var x;
    if (x== 1){
        count=count+1;
    }
    if (count == 1){
        document.getElementById("change3").style.background="#FAFF00";
        document.getElementById("ganti3").textContent="Siap Diantar";
    }
    else if(count == 2){
        document.getElementById("change3").style.background="#00FF38";
        document.getElementById("ganti3").textContent="Sudah Diantar";

    }
    else if(count == 3) {
        document.getElementById("change3").style.background="#F00";
        document.getElementById("ganti3").textContent="Diproses";
        count=0;
    }
}