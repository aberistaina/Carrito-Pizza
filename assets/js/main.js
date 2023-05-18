$(document).ready(function () {

let ingredientesPizza = []

const ingredientes = $(".form-check-input")
const propina = $("#thankGod")
const boton = $("#boton")

ingredientes.on("click", function(){
    if($(this).is(":checked")){
    ingredientesPizza.push($(this).val())
    $("#ingreSelect").text(ingredientesPizza) 
    agregar()
} else{
    let valor = $(this).val()
    let index = ingredientesPizza.indexOf(valor)
    ingredientesPizza.splice(index, 1)
    $("#ingreSelect").text(ingredientesPizza) 
    agregar()
}

})


function agregar(){
    $("#extraPrice").text(0)
    if(ingredientesPizza.length > 3){
        let precioExtras = (ingredientesPizza.length * 800) -2400
        $("#extraPrice").text(formatearValores(precioExtras))
        $("#extraIngredients").text(ingredientesPizza.slice(3))
    }else{
        $("#extraIngredients").text("")
    }
}
    

propina.on({

click: function(){
    if(propina.val() == ""){
        let totalPropina = propina.val(1000)
        totalPropina = 1000

        $("#tip").text(formatearValores(totalPropina))

}},

keyup: function(){
    if(propina.val() > 0){
        let propinaTotal = propina.val()
        $("#tip").text(formatearValores(propinaTotal))
}
}
})
+

boton.on("click", function(){
     if(propina.val() && propina.val() > 0){
        let propinaTotall = propina.val()  
        alert(`su propina es de $${formatearValores(propinaTotall)} ha sido enviada`)
     }
     else {
        alert("Aún no ha definido su propina")
     }

})

function formatearValores(valor){
    return Number(valor).toLocaleString("es-CL", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    
}
});