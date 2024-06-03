console.log("validations.js cargado correctamente");

function validarRegistro() {
    var nombre = document.getElementById("nombre").value;
    var categoria = document.getElementById("categoria").value;
    var imagen = document.getElementById("imagen").files[0]; // Obtener el objeto de archivo de la imagen
    var precio = document.getElementById("precio").value;
    var codigo = document.getElementById("codigo").value;
    var estado = document.getElementById("estado").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
    var marca = document.getElementById("marca").value;

    // Validar nombre
    if (nombre.length < 1 || nombre.length > 20) {
        window.location.replace("about.html");
        return false;
    }

    // Validar categoría
    if (categoria === "") {
        window.location.replace("about.html");
        return false;
    }

    // Validar imagen
    if (!imagen) { // Comprobar si se ha seleccionado una imagen
        window.location.replace("about.html");
        return false;
    }

    // Validar precio
    if (precio === "" || !/^[0-9]+$/.test(precio)) {
        window.location.replace("about.html");
        return false;
    }

    // Validar código
    if (codigo.length < 8 || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,}).{8,}$/.test(codigo)) {
        window.location.replace("about.html");
        return false;
    }

    // Si todo es correcto, crear el objeto de producto
    var nuevoProducto = {
        name: nombre,
        category: categoria,
        image: imagen, // Utilizar el objeto de archivo
        price: parseFloat(precio),
        code: codigo,
        status: estado,
        nationality: nacionalidad,
        carBrand: marca
    };

    // Agregar el nuevo producto al array driftProducts
    addProduct(nuevoProducto);

    // Mostrar mensaje de éxito
    alert("Producto registrado con éxito.");

    // Limpiar el formulario
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("imagen").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("nacionalidad").value = "";
    document.getElementById("marca").value = "";

    return false;
}
