const osszpont = 5
const elso = document.getElementById("elso")
const masodik = document.getElementById("masodik")
const harmadik = document.getElementById("harmadik")
const negyedik = document.getElementById("negyedik")
const otodik = document.getElementById("otodik")




document.getElementById("gomb").addEventListener
("click", elsotuntetes);
function elsotuntetes() {
    masodik.style.display = "block"; elso.style.display = "none"
}
document.getElementById("gomb2").addEventListener
("click", masodiktuntetes);
function masodiktuntetes() {
    harmadik.style.display = "block"; masodik.style.display = "none"
}
document.getElementById("gomb3").addEventListener
("click", harmadiktuntetes);
function harmadiktuntetes() {
    negyedik.style.display = "block"; harmadik.style.display = "none"
}
document.getElementById("gomb4").addEventListener
("click", negyediktuntetes);
function negyediktuntetes() {
    otodik.style.display = "block"; negyedik.style.display = "none"
}


document.getElementById("beadas").addEventListener
    ("click", pontszamitas)
function pontszamitas() {
    const a = document.getElementById("T3").checked;
    let pont = 0

    if (a == 1) { pont = pont + 1 };
    const b = document.getElementById("basil").checked;
    const c = document.getElementById("pepper").checked;
    const d = document.getElementById("oregano").checked;
    const e = document.getElementById("salt").checked

    if (e == 0 && d == 1 && c == 0 && b == 1) { pont = pont + 1 };

    const f = document.getElementById("lista").selectedIndex;
    if (f == 0) { pont = pont + 1 };


    const g = document.getElementById("kenyer").value;
    if (g == "flour") { pont = pont + 1 };

    const h = document.getElementById("hanyszor").value;
    if (h == 3) { pont = pont + 1 };

    document.getElementById("osszpontsz").innerText = `Congratulations you have achieved ${pont} out of ${osszpont} points!`;
    otodik.style.display = "none"; osszpont.style.display = "block"
}