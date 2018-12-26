var caja=[];
caja.push(new Billete(100,4));
caja.push(new Billete(50,3));
caja.push(new Billete(20,2));
caja.push(new Billete(10,2));

var dineroSolicitado=0;
var seEntrego=false;

var button =document.getElementById('extraer');
var resultado= document.getElementById("resultado");
button.addEventListener("click",extraer);

function extraer(){
  resultado.innerHTML="";
    dineroSolicitado=parseInt(document.getElementById('dinero').value);
    dineroAEntregar=entregarDinero(dineroSolicitado);
    if(seEntrego){
      for(var e of dineroAEntregar){
        if(e.cantidad !=0 )
          resultado.innerHTML += e.cantidad + " billetes de $"+ e.valor + "<br/>";
      }
    }
}

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
      entregado.push(new Billete(billete.valor,noBilletes));
      dinero=dinero-(billete.valor*noBilletes);
    }
  }
  if(dinero!=0){ //Valido si en el ciclo pasado me dió todo el dinero, si no, no lo despliega
    resultado.innerHTML="No se puede regresar el dinero";
    seEntrego=false;
    return 0;
  }else{
    seEntrego=true;
    return entregado;
  }
}
