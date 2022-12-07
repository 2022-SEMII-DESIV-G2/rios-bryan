const pyramid=[ "75","95","64","17","47","82","18","35","87","10","20","04","82","47","65",
                "19","01","23","75","03","34","88","02","77","73","07","63","67","99","65",
                "04","28","06","16","70","92","41","41","26","56","83","40","80","70","33",
                "41","48","72","33","47","32","37","16","94","29","53","71","44","65","25",
                "43","91","52","97","51","14","70","11","33","28","77","73","17","78","39",
                "68","17","57","91","71","52","38","17","14","91","43","58","50","27","29",
                "48","63","66","04","68","89","53","67","30","73","16","69","87","40","31",
                "04","62","98","27","23","09","70","98","73","93","38","53","60","04","23"];
var sum;
var route = new Array(15);
var form =`<form id="form">
<div id="inputs">
    <label for="">Niveles: </label>
    <input type="number" min="5" max="15" id="levels" placeholder="5">
</div>
<div id="bx_btn">
    <button class="btn" type="button" onclick="Run_Pyramid()">Cargar pirámide</button>
</div>
</form>`;

var bxbtn=`<button type="button" class="btn" onclick="Run_Pyramid()">Imprimir Pirámide</button>
<button type="button" class="btn" onclick="Show_Route()">Mostrar ruta</button>
<button type="button" class="btn" onclick="Volver()">Volver</button>`

function Run_Pyramid() {
  document.getElementById("pyramid").innerHTML = "";
  document.getElementById("sum").innerHTML = "Suma: ";
  document.getElementById("bx_btn").innerHTML = `${bxbtn}`;
  var position = 0;
  for (let level = 0; level < 15; level++) {
    document.getElementById(
      "pyramid"
    ).innerHTML += `<div class=lvl id=lvl${level}></div>`;
    position += level;
    for (let item = position; item <= level + position; item++) {
      document.getElementById(
        `lvl${level}`
      ).innerHTML += `<span id=position${item}>${pyramid[item]}</span>`;
    }
    if (level == 0) route[0] = 0;
    else route[level] = Calculate_Route(route[level - 1], level);
  }
}
function Calculate_Route(pos, lev) {
  if (pyramid[pos + lev] > pyramid[pos + lev + 1]) r = pos + lev;
  else r = pos + lev + 1;
  return r;
}
function Show_Route() {
  sum = 0;
  route.forEach((item) => {
    document.getElementById(`position${item}`).className = "route";
    sum += parseInt(pyramid[item], 10);
  });
  document.getElementById("sum").innerHTML = `Suma: ${sum}`;
}
function Volver(){
  document.location=document.location;
  }