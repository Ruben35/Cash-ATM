var caja=[];
caja.push(new Billete(50,3));
caja.push(new Billete(20,2));
caja.push(new Billete(10,2));

var dineroSolicitado=15;
var dineroRecibido=entregarDinero(dineroSolicitado);

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
    alert("No se puede regresar el dinero");
    return 0;
  }else{
    return entregado;
  }
}
