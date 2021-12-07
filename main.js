//array con planes(visitas, precio, precio con descuento)
var planes = [['10K', 8, 6], ['50K', 12, 9], ['100K', 16, 12], ['500K', 24, 18], ['1M', 36, 27]];
var switch1 = document.getElementById('switch');//meto el switch en una variable (para tomar estado)
var switch1Body = document.getElementById('switchBody');//el cuerpo del switch (el switch está hidden)
var slider = document.getElementById('myRange');

//mover el mouse sobre el slider ajusta el background dependiendo la posición
slider.addEventListener("pointermove", function () {
    var x = slider.value;
    var color = 'linear-gradient(90deg,var(--Soft-Cyan-FullSliderBar)' + x + '%,var(--LightGrayishBlue-EmptySliderBar)' + x + '%)'
    slider.style.background = color;
    //con el mismo evento, cambio el plan a mostrar en pantalla
    planState()
})

//si detecta el cambio en el switch (checked) ejecuta de nuevo la función
//esta vez va a aplicar el precio con descuento (índice 2 de los arrays dentro de "planes")
switch1.onchange =()=> planState();


//función que evalúa posición del slider y del switch para aplicar el plan seleccionado
function planState() {
    let x = slider.value;
    let isChecked = switch1.checked;

    if (x>=0 && x<25) {
        document.getElementById('counter').innerText = "10K"
        if (isChecked) {
            document.getElementById('price').innerText = "$" + planes[0][2].toFixed(2)
        } else {
            document.getElementById('price').innerText = "$" + planes[0][1].toFixed(2)
        }
    } else if (x>=25 && x<50) {
        document.getElementById('counter').innerText = "50K"
        if (isChecked) {
            document.getElementById('price').innerText = "$" + planes[1][2].toFixed(2)
        } else {
            document.getElementById('price').innerText = "$" + planes[1][1].toFixed(2)
        }
    } else if (x>=50 && x<75) {
        document.getElementById('counter').innerText = "100K"
        if (isChecked) {
            document.getElementById('price').innerText = "$" + planes[2][2].toFixed(2)
        } else {
            document.getElementById('price').innerText = "$" + planes[2][1].toFixed(2)
        }
    } else if (x>=75 && x<100) {
        document.getElementById('counter').innerText = "500K"
        if (isChecked) {
            document.getElementById('price').innerText = "$" + planes[3][2].toFixed(2)
        } else {
            document.getElementById('price').innerText = "$" + planes[3][1].toFixed(2)
        }
    } else if (x=100) {
        document.getElementById('counter').innerText = "1M"
        if (isChecked) {
            document.getElementById('price').innerText = "$" + planes[4][2].toFixed(2)
        } else {
            document.getElementById('price').innerText = "$" + planes[4][1].toFixed(2)
        }
    }
}
//Responsive para dispositivos moviles (pantallas < 375px)

var priceRow = document.getElementById('price-row')
var sliderContainer = document.getElementById('sliderContainer')
var viewsContainer = document.getElementById('viewsContainer')

var responsive = function(){
    if (this.innerWidth <375){
        document.getElementById('descuento').innerText="25%";
        document.getElementById('descuento').style.width="auto";
        document.getElementById('title').style.fontSize="22px"
        sliderContainer.after(priceRow)
    }else{
        document.getElementById('descuento').innerText="25% discount"
        document.getElementById('descuento').style.width="80px";
        document.getElementById('title').style.fontSize="32px"
        viewsContainer.after(priceRow)
    }
}
window.onload=()=>responsive()
window.addEventListener('resize', function(){return responsive()})
