
const consumiendoAPI = async() => {
    const resultados = await fetch('./api.json');
    const data = await resultados.json();
    console.log(data);
    mostrarDatos(data);
};

const mostrarDatos = (datos) =>{
    const api = document.querySelector("#api");
    nombres.onclick = () =>{
        api.innerHTML = `<ul>NOMBRES: </ul>`
        datos.forEach(elementos0 => {
            console.log(elementos0.nombre);
            const li = document.createElement('li');
            li.innerHTML = `${elementos0.nombre}
            <hr>`;
            api.appendChild(li);       
        });
    }
    apellido.onclick = () =>{
        api.innerHTML = `<ul>APELLIDOS: </ul>`
        datos.forEach(elementos1 => {
            console.log(elementos1.apellido);
            const li = document.createElement('li');
            li.innerHTML = `${elementos1.apellido}
            <hr>`;
            api.appendChild(li);       
        });
    }
    direccion.onclick = () =>{
        api.innerHTML = `<ul>DIRECCION: </ul>`
        datos.forEach(elementos2 => {
            console.log(elementos2.direccion);
            const li = document.createElement('li');
            li.innerHTML = `${elementos2.direccion}
            <hr>`;
            api.appendChild(li);       
        });
    }
    emails.onclick = () =>{
        api.innerHTML = `<ul>E-MAILS: </ul>`
        datos.forEach(elementos3 => {
            console.log(elementos3.email);
            const li = document.createElement('li');
            li.innerHTML = `${elementos3.email}
            <hr>`;
            api.appendChild(li);       
        });
    }

    codigosPostales.onclick = () =>{
        api.innerHTML = `<ul>COD POSTALES: </ul>`
        datos.forEach(elementos4 => {
            console.log(elementos4.codigo);
            const li = document.createElement('li');
            li.innerHTML = `${elementos4.codigo}
            <hr>`;
            api.appendChild(li);       
        });
    }
    montos.onclick = () =>{
        api.innerHTML = `<ul>MONTOS: </ul>`
        datos.forEach(elementos5 => {
            console.log(elementos5.monto);
            const li = document.createElement('li');
            li.innerHTML = `${elementos5.monto}
            <hr>`;
            api.appendChild(li);       
        });
    }
}

const nombres = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const direccion = document.querySelector("#direccion")
const emails = document.querySelector("#emails")
const codigosPostales = document.querySelector("#codPostales")
const montos = document.querySelector("#montos")
consumiendoAPI();
//Selecciono el color de background de acuerdo al boton que se presione

const estiloOscuro = document.querySelector("#botonOscuro");
const estiloClaro = document.querySelector("#botonClaro");
const fondo = document.querySelector(".contenedor");
const titulo = document.querySelector("#titulo");
const estilos = document.querySelector("#estilos");
const label = document.querySelector("#label");
const label0 = document.querySelector("#label0");
const label1 = document.querySelector("#label1");
const label2 = document.querySelector("#label2");
const label3 = document.querySelector("#label3");
const label4 = document.querySelector("#label4");

const botonPagar = 0;


estiloOscuro.onclick = () =>{
    console.log("Cambio a tema oscuro");
    fondo.style.background = "black";
    titulo.style.color = "white";
    estilos.style.color = "white";
    label.style.color = "white";
    label0.style.color = "white";
    label1.style.color = "white";
    label2.style.color = "white";
    label3.style.color = "white";
    label4.style.color = "white";
    compra.style.color = "white";
    tituloApi.style.color = "white";
}

estiloClaro.onclick = () =>{
    console.log("Cambio a tema claro");
    fondo.style.background = "white";
    titulo.style.color = "black";
    estilos.style.color = "black";
    label.style.color = "black";
    label0.style.color = "black";
    label1.style.color = "black";
    label2.style.color = "black";
    label3.style.color = "black";
    label4.style.color = "black";
    compra.style.color = "black";
    tituloApi.style.color = "black";
}

//Cambio la cantidad de stock disponible a medida que el usuario agrega productos al carrito
const boton0 = document.querySelector("#boton0");
const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#boton3");
const boton4 = document.querySelector("#boton4");
const boton5 = document.querySelector("#boton5");

 
//Variables para modificar la cantidad de stock de los productos

let cont0 = 5;
let cont1 = 5; 
let cont2 = 5;  
let cont3 = 5;
let cont4 = 5;
let cont5 = 5;
let stock0 = document.querySelector("#stock0");
let stock1 = document.querySelector("#stock1");
let stock2 = document.querySelector("#stock2");
let stock3 = document.querySelector("#stock3");
let stock4 = document.querySelector("#stock4");
let stock5 = document.querySelector("#stock5");
//Resto stock del prodcuto selcccionado por cada vez que se presiona algun boton de "Agregar al carrito"
let contBuzo = 0;
let contCampera = 0;
let contGorra = 0;
let contShort = 0;
let contRemera = 0;
let contZapatillas = 0;
let monto = 0;

const total = document.querySelector("#total");
const compra = document.createElement("h4");
const tituloApi = document.querySelector("#tituloApi")


boton0.onclick = () =>{
    cont0--;
    contBuzo++;
    stock0.innerHTML = "Cantidad: " + cont0;
    if( cont0 <= 0)
    {
        contBuzo = 5;
        stock0.innerHTML = "Agotado";
        Swal.fire({
            title: 'Sin stock!',
            text: 'Disculpe las molestias',
            imageUrl: './img/buzoNike.jpg',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
    }
    if( cont0 > 0)
    {
        monto = monto + 3900;
    }
    compra.innerHTML = `<h4>El monto a pagar es: $ ${monto}</h4>
    <hr>`       
    localStorage.setItem("Buzos", contBuzo);
}

boton1.onclick = () =>{
    cont1--;
    contCampera++;
    stock1.innerHTML = "Cantidad: " + cont1;
    if( cont1 <= 0)
    {
        stock1.innerHTML = "Agotado";
        Swal.fire({
            title: 'Sin stock!',
            text: 'Disculpe las molestias',
            imageUrl: './img/camperaAdidas.jpg',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
        contCampera = 5;
    }
    if( cont1 > 0)
    {
        monto = monto + 7000;
    }
    compra.innerHTML = `<h4>El monto a pagar es: $ ${monto}</h4>
    <hr>`
    localStorage.setItem("Camperas", contCampera);
}

boton2.onclick = () =>{
    cont2--;
    contGorra++;
    stock2.innerHTML = "Cantidad: " + cont2;
    if( cont2 <= 0)
    {
        stock2.innerHTML = "Agotado";
        Swal.fire({
            title: 'Sin stock!',
            text: 'Disculpe las molestias',
            imageUrl: './img/gorraNike.jpg',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
        contGorra = 5;
    }
    if( cont2 > 0)
    {
        monto = monto + 2000;
    }
    compra.innerHTML = `<h4>El monto a pagar es: $ ${monto}</h4>
    <hr>` 
    localStorage.setItem("Gorras", contGorra);
}

boton3.onclick = () =>{
    cont3--;
    contShort++;
    stock3.innerHTML = "Cantidad: " + cont3;
    if( cont3 <= 0)
    {
        stock3.innerHTML = "Agotado";
        Swal.fire({
            title: 'Sin stock!',
            text: 'Disculpe las molestias',
            imageUrl: './img/shortUniqlo.webp',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
        contShort  = 5;
    }
    if(cont3 > 0)
    {
        monto = monto + 3900;
    }
    compra.innerHTML = `<h4>El monto a pagar es: $ ${monto}</h4>
    <hr>` 
    localStorage.setItem("Shorts", contShort);
}

boton4.onclick = () =>{
    cont4--;
    contRemera++;
    stock4.innerHTML = "Cantidad: " + cont4;
    if( cont4 <= 0)
    {
        stock4.innerHTML = "Agotado";
        Swal.fire({
            title: 'Sin stock!',
            text: 'Disculpe las molestias',
            imageUrl: './img/remeraAdidas.jpg',
            imageWidth: 200,
            imageHeight: 300,
            imageAlt: 'Custom image',
        });
        contRemera = 5;
    }
    if( cont4 > 0)
    {
        monto = monto + 3200;
    }
    compra.innerHTML = `<h4>El monto a pagar es: $ ${monto}</h4>
    <hr>` 
    localStorage.setItem("Remeras", contRemera);
}

boton5.onclick = () =>{
    cont5--;
    contZapatillas++;
    stock5.innerHTML = "Cantidad: " + cont5;
    if( cont5 <= 0)
    {
        stock5.innerHTML = "Agotado";
        Swal.fire({
            title: 'Sin stock!',
            text: 'Disculpe las molestias',
            imageUrl: './img/zapatillasNike.jpg',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
        contZapatillas = 5;
    }
    if( cont5 > 0)
    {
        monto = monto + 12000;
    }
    compra.innerHTML = `<h4>El monto a pagar es: $ ${monto}</h4>
    <hr>` 
    localStorage.setItem("Zapatillas", contZapatillas);
}

total.appendChild(compra)

const pagar = document.querySelector("#pagar");
const formulario = document.querySelector("#pagando");
pagar.onclick = () =>{

    $("#pagando").show();
}

//Guardando datos del usuario en Local Storage

class Personas{
    constructor(id, nombre, apellido, direccion, email, localidad, codigoPostal)
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.email = email;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
    }
}

let usuario = []

const botonAceptar = document.querySelector("#botonAceptar");
const botonEnviar = document.querySelector("#botonEnviar");

let miFormulario = document.querySelector("#formulario");
miFormulario.addEventListener("submit", validarFormulario); 

function validarFormulario(e)
{
    const inputNombre = document.querySelector("#Nombre");
    let nombre = inputNombre.value;
    const inputApellido = document.querySelector("#Apellido");
    let apellido = inputApellido.value;
    const inputDireccion = document.querySelector("#Direccion");
    let direccion = inputDireccion.value;
    const inputEmail = document.querySelector("#email");
    let email = inputEmail.value;
    const inputLocalidad = document.querySelector("#Localidad");
    let localidad = inputLocalidad.value;
    const inputCodPostal = document.querySelector("#CodPostal");
    let codPostal = inputCodPostal.value;
    if (nombre == "" || apellido == "" || direccion == "" || email == "" || localidad == ""  || codPostal == "") 
    {
        e.preventDefault();
        console.log("faltan datos");
        Swal.fire({
            icon: 'success',
            title: 'Faltan completar campos'
            })
    }
    else
    {
        usuario.push(new Personas(nombre, apellido, direccion, email, localidad, codPostal))
        let nuevoArray = [];
        let arrayDeUsuarios = JSON.parse(localStorage.getItem("Usuarios"));
        console.log("datito: " + arrayDeUsuarios);
        nuevoArray = usuario;
        if (arrayDeUsuarios == null) 
        {
            
            localStorage.setItem("Usuarios", JSON.stringify(nuevoArray))    
        }
        else
        {
            for (const elemento of arrayDeUsuarios) {
                nuevoArray.push(elemento)
            }
            localStorage.setItem("Usuarios", JSON.stringify(nuevoArray))
        }
    }
}