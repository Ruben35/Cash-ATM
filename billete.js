class Billete{
  constructor(v,c,r){
    this.valor=v;
    this.cantidad=c;
    this.imagen= new Image();
    this.imagen.src=r;
  }

  expulsar(parrafo){
    parrafo.innerHTML +="<img src='"+this.imagen.src+"'/><br/>"
  }

}
