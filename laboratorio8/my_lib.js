function contar_caracter() {
    var txt = document.getElementById('txt_cadena').
    value.trim().toLowerCase().split('');
    var repeticiones = {};
    txt.forEach( ( letra ) => {
      repeticiones[ letra ] = ( repeticiones[ letra ] || 0 ) + 1;
    });
    document.getElementById('resultado').innerHTML="";
    document.getElementById('letras').innerHTML = "Letras";
    document.getElementById('letras').style.visibility = 'visible';
    document.getElementById('btn_limpiar').style.visibility = 'visible';  
    for( let letra in repeticiones ) {
      var text = `<p>${ letra } : ${ repeticiones[ letra ] }</p>`;
      document.getElementById('resultado').innerHTML += text;
    }
  }
  
  function limpiar_caracter(){
    document.getElementById('resultado').innerHTML="";
    document.getElementById('txt_cadena').value="";
    document.getElementById('btn_limpiar').style.visibility = 'hidden';
    document.getElementById('letras').style.visibility = 'hidden';
  }