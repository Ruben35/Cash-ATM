//Dinero del cajero
var caja=[];
caja.push(new Billete(100,4,"100.png"));
caja.push(new Billete(50,3,"50.png"));
caja.push(new Billete(20,2,"20.png"));
caja.push(new Billete(10,2,"10.png"));

//Variables Globales
var dineroSolicitado=0;
var seEntrego=false;

//Conexion con la pagina
var button =document.getElementById('extraer');
var resultado= document.getElementById("resultado");
button.addEventListener("click",extraer);

/**
  Funcion para extraer el dinero del cajero, en donde obtiene el dinero de la caja
  con base en el dinero que exige la función entregarDinero()
  Disminuye la cantidad de billetes del cajero.
*/
function extraer(){
  resultado.innerHTML="";
  dineroSolicitado=parseInt(document.getElementById('dinero').value);
  dineroAEntregar=entregarDinero(dineroSolicitado);
  if(seEntrego){
    for(var e of dineroAEntregar){
      if(e.cantidad !=0 ){
        resultado.innerHTML += e.cantidad + " billetes de $"+ e.valor + "<br/>";
      }
      for(var i=0;i<e.cantidad;i++){
        for(var j of caja){
          if(j.valor==e.valor){
            j.expulsar(resultado);
            j.cantidad--;
          }
        }
      }
    }
  }
}

/**
  Funcion que verifica si es posible dar el dinero solicitado.
  Si lo es, lo regresa en un arreglo con los Billetes a entregar.
  Si no lo es, regresa 0 y la variable global "seEntrego" cambia a false.
*/
function entregarDinero(dinero){
  var entregado=[];
  for(billete of caja){
    if(dinero>0){
      var billetesNecesarios=Math.floor(dinero/billete.valor);
      var noBilletes=0;
      if(billetesNecesarios>billete.cantidad){
        noBilletes=billete.cantidad;
      }else{
        noBilletes=billetesNecesarios;
      }
      entregado.push(new Billete(billete.valor,noBilletes,billete.imagen.src));
      dinero=dinero-(billete.valor*noBilletes);
    }
  }
  if(dinero!=0){ //Valido si en el ciclo pasado me dió todo el dinero, si no, no lo despliega
    resultado.innerHTML="El cajero no tiene suficiente dinero y/o cambio";
    seEntrego=false;
    return 0;
  }else{
    seEntrego=true;
    return entregado;
  }
}
