var cuadro = document.getElementById("marco")
var hoja = cuadro.getContext("2d");
var xi, yi, xf, yf, click;
var color = "blue"
var ajuste = 1

cuadro.addEventListener("mousedown", clickD);
cuadro.addEventListener("mouseup", clickU);
cuadro.addEventListener("mousemove", clickM);


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function clickD(evento1)
{
  click=true;
  xi = evento1.layerX-ajuste;
  yi = evento1.layerY-ajuste;
}

function clickM(evento2)
{
  if(click)
  {
    xf = evento2.layerX-ajuste;
    yf = evento2.layerY-ajuste;
    dibujarlinea(color, xi, yi, xf, yf, hoja)
    xi = xf;
    yi = yf;
  }
}

function clickU(evento3)
{
  click = false;
}




dibujarlinea("black",200,700,700,700,hoja)
dibujarlinea("black",700,700,600,200,hoja)
dibujarlinea("black",600,200,200,700,hoja)