function kiir(tartalom) {
  let x = document.getElementById("kijelzo");
  x.value += tartalom + "\n";
}

function elso() {
  let ottel = [];
  for (i = 100; i < 999; i++) {
    if (i % 5 == 0) {
      if (i % 2 == 1) {
        ottel.push(" " + i);
      }
    }
  }
  kiir("Ötre végződő háromjegyű számok: " + ottel + "\n");
}

//Második
function masodik() {
  const napok = [
    "hétfő",
    "kedd",
    "szerda",
    "csütörtök",
    "péntek",
    "szombat",
    "vasárnap",
  ];
  console.log(napok[2][4]);
  kiir("Tömb hossza -3: " + napok[napok.length - 3]);
}

//Minimum

function minimum() {
  let tomb = [50, 15, 20, 102, -5, -70, 45];
  let arrHossz = tomb.length;
  let arrMin = 1000;

  for (i = 0; i < arrHossz; i++) {
    let ertek = tomb[i];
    if (arrMin > ertek) {
      arrMin = ertek;
    }
  }
  kiir(tomb + "\n\nA tömbben tárolt legkisebb szám: " + arrMin);
}

//Maximum

function maximum() {
  let tomb = [50, 15, 20, 102, -5, -70, 45];
  let arrHossz = tomb.length;
  let arrMax = tomb[0]; //helyesen!!!

  for (i = 0; i < arrHossz; i++) {
    let ertek = tomb[i];
    if (arrMax < ertek) {
      arrMax = ertek;
    }
  }
  kiir(tomb + "\n\nA tömbben tárolt legnagyobb szám: " + arrMax);
}

//Helyiérték
function veletlenSzam(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a); //random szám a és b között
}

function helyiertek() {
  let n = veletlenSzam(1000, 9999);

  kiir("A négyjegyű szám: " + n);
  let ezres = Math.floor(n / 1000);
  kiir("Ezresekből: " + ezres);
  let szazas = Math.floor(n / 100);
  szazas = Math.floor(szazas % 10);
  kiir("Százasokból: " + szazas);
  let tizes = Math.floor(n / 10);
  tizes = Math.floor(tizes % 10);
  kiir("Tízesekből: " + tizes);
  let egyes = Math.floor(n / 1);
  egyes = Math.floor(egyes % 10);
  kiir("Egyesekből: " + egyes);

  let osszeg = ezres + szazas + tizes + egyes + "\n";

  kiir(
    "A számjegyek külön: " + ezres + ", " + szazas + ", " + tizes + ", " + egyes
  );
  kiir("A számjegyek összege: " + osszeg + "\n");
}

function tombok2(){
    let tomb2 = [];
    for (i = 0; i < 10; i++){
        tomb2.push(veletlenSzam(1, 1000));
    }
    kiir("A másik tömb számai: " + tomb2 + "\n");
}

function tombok3() {
  let tomb3 = [];
  for (i = 0; i < 10; i++) {
    tomb3.push(veletlenSzam(1, 100));
  }
  kiir("A harmadik tömb számai: " + tomb3 + "\n");
}


function osszefesul() {
  let t = [];
  let index = 0;

  let t1 = [];
  for (i = 0; i < 10; i++) {
    t1.push(veletlenSzam(1, 25));
  }

  let t2 = [];
  for (i = 0; i < 10; i++) {
    t2.push(veletlenSzam(1, 25));
  }
  kiir("Első tömb számai: " + t1 + "\n");
  kiir("Második tömb számai: " + t2 + "\n");

  for (i = 0; i < t1.length; i++) {
    if (!t.includes(t1[i])) {
      t[index++] = t1[i];
    }
  }
  for (i = 0; i < t2.length; i++) {
    if (!t.includes(t2[i])) {
      t[index++] = t2[i];
    }
    console.log(index);
  }
  kiir("Az összefésült tömb számai: " + t + "\n");
}

function metszet() {
  let tMetszet = [];
  let index2 = 0;

  let t3 = [];
  for (i = 0; i < 10; i++) {
    t3.push(veletlenSzam(1, 25));
  }

  let t4 = [];
  for (i = 0; i < 10; i++) {
    t4.push(veletlenSzam(1, 25));
  }
  kiir("Első tömb számai: " + t3 + "\n");
  kiir("Második tömb számai: " + t4 + "\n");

  for (i = 0; i < t3.length; i++) {
    for (j = 0; j < t4.length; j++) {
      console.log(i, j);
      if (t3[i] == t4[j]) {
        if (!tMetszet.includes(t3[i])) {
          tMetszet[index2++] = t3[i];
        }
      }
    }
  }
  kiir("Metszet :" + tMetszet + "\n");
}