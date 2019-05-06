function agregar () {
    if ( document.frm.txtEtiqueta.value.length == 0 ) {
        alert("Debes escribir algo");
    } else {
        var nuevoItem = document.frm.txtEtiqueta.value;
        var combo = document.getElementById("selColores");
        var option = document.createElement("option");
        combo.options.add(option, 0);
        combo.options[0].value = nuevoItem;
        combo.options[0].innerText = nuevoItem;
        document.frm.txtEtiqueta.value = "";
    }
}
function eliminar() {
    var combo = document.getElementById("selColores");
    combo.remove(document.getElementById("selColores").selectedIndex);
}

function modificar() {
    if ( document.frm.txtEtiqueta.value.length == 0 ) {
        alert("Debes escribir algo");
    } else {
        eliminar();
        agregar();
    }
}