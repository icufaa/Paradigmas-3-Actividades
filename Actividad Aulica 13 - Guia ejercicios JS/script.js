    document.getElementById("resultado1").innerHTML = "Nombre: Facundo <br>Edad: 24 años ";

// variables
let nombreEmpleado = "Max Verstappen";
let sueldo = 10;
document.getElementById("resultado2").innerHTML = "Nombre: " + nombreEmpleado +"<br>Sueldo: $" + sueldo


//entrada de datos - ejercico 1
function mostrarDatos(){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    document.getElementById("resultado3").innerHTML = "Nombre: " + nombre + "<br>Email: " + email;
}


// estructura secuencial - ejercicio 1
function calcularPerimetro() {
    let lado = document.getElementById("lado").value;
    let perimetro = lado * 4;
    document.getElementById("resultado4").innerHTML = "Perimetro; " + perimetro;
}

// ejercicio 2
function calcularSumaProducto(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);

    let suma = num1+num2;
    let producto = num3*num4;

    document.getElementById("resultado5").innerHTML = "Suma de los 2 primeros numeros= " + suma + "<br>Pruducto del 3° y 4°=" +producto;
}

//ejercicio 3
function calcularSumaProducto2() {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let valor3 = parseInt(document.getElementById("valor3").value);
    let valor4 = parseInt(document.getElementById("valor4").value);

    let suma = valor1 + valor2+valor3+valor4;
    let producto = valor1*valor2*valor3*valor4;
    document.getElementById("resultado6").innerHTML = "Suma total = "+suma+"<br> Producto total = "+producto;
}
//ejercicio 4
function calcularTotal(){
    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let total = precio * cantidad;
    
    document.getElementById("resultado7").innerHTML = "Total= $"+total;
}

// estructura condicional
function sacarPromedio(){
    let nota1 = parseFloat(document.getElementById("numero1").value);
    let nota2 = parseFloat(document.getElementById("numero2").value);
    let nota3 = parseFloat(document.getElementById("numero3").value);

    let promedio = (nota1 + nota2 + nota3) / 3;

    if(promedio < 0 || promedio > 10){
        document.getElementById("resultado8").innerHTML = "Carga bien las notas";
    }if (promedio >= 8 && promedio <= 10){
        document.getElementById("resultado8").innerHTML = "Promocionaste: " + promedio;
    } if (promedio >= 6 && promedio <= 7) {
        document.getElementById("resultado8").innerHTML = "Regular: " + promedio;
    } if (promedio < 6 && promedio >= 4) {
        document.getElementById("resultado8").innerHTML = "Libre: " + promedio;
    } if (promedio < 4 && promedio > 0 ) {
        document.getElementById("resultado8").innerHTML = "Recursa3: " + promedio;
    }
}
