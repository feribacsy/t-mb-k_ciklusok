function kiir(tartalom){
    let x = document.getElementById("kijelzo");
    x.value += tartalom +  "\n";
}

function elso(){
    let ottel = [];
    for(i=100; i<999; i++){
        if(i % 5 == 0){
            if(i % 2 == 1){
               ottel.push(" " + i); 
            }
        }
    }
    kiir("Ötre végződő háromjegyű számok: " + ottel + "\n");
}

//Második

function masodik(){
    const napok = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
    console.log(napok[4][3]);
    kiir("Tömb hossza-3: " + napok[napok.length-3]);
}

//Minimum

function minimum(){
    let tomb = [50, 15, 20, 102, -5, -70, 45];
    let arrHossz = tomb.length;
    let arrMin = 1000;

    for(i=0; i<arrHossz; i++){
        let ertek = tomb[i];
        if(arrMin > ertek){
            arrMin = ertek
        }
    }
    kiir(tomb + "\n\nA tömbben tárolt legkisebb szám: " + arrMin);
}

//Maximum

function maximum(){
    let tomb = [50, 15, 20, 102, -5, -70, 45];
    let arrHossz = tomb.length;
    let arrMax = tomb[0]; //helyesen!!!

    for(i=0; i<arrHossz; i++){
        let ertek = tomb[i];
        if(arrMax < ertek){
            arrMax = ertek
        }
    }
    kiir(tomb + "\n\nA tömbben tárolt legnagyobb szám: " + arrMax)
}

//Helyiérték
function veletlenSzam(a, b){
    return Math.floor(Math.random() * (b-a+1)+a); //random szám a és b között
}

function helyiertek(){
let n = veletlenSzam(1000, 9999);

kiir("A négyjegyű szám: " + n);
}

