var vehiculo = document.getElementById("vehiculo");
var placa = document.getElementById("placa");

vehiculo.addEventListener("change", function (){
    if (this.value == "bicicleta"){
        placa.disabled = true;
    }
    else{
        placa.disabled = false;
    }
})