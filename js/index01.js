const jefe = 5000;
const analista = 4000;
const programador = 3000;
const soporte = 2000;
const asistente = 1500;

class empleado{
    constructor(codigo,nombre,apellido,correo,cargo){
    this.codigo = codigo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.cargo = cargo;
}
sueldoBruto(){
    if(this.cargo=="jefe"){
    return jefe;
    }else if(this.cargo=="analista"){
    return analista;
    }else if(this.cargo=="programador"){
    return programador;
    }else if(this.cargo=="soporte"){
    return soporte;
    }else if(this.cargo == "asistente"){
    return asistente;
    }
}
descuento(){
    let sueldobruto=this.sueldoBruto();
    let descuento =(sueldobruto*12.5)/100;
    return descuento;
}
sueldoNeto(){
    let descuento = this.descuento();
    let sueldoBruto = this.sueldoBruto();
    let total = sueldoBruto-descuento;
    return `el sueldo neto es : s/${total}`;
    }
}

let codigo = prompt("ingrese codigo");
let nombre = prompt("ingrese nombre");
let apellido = prompt("ingrese apellido");
let correo = prompt("ingrese correo");
let cargo = prompt("ingrese cargo");

let user = new empleado(codigo,nombre,apellido,correo,cargo);
alert(user.sueldoNeto());