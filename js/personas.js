class Persona{

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }


    get getNombre(){
        return this._nombre;
    }

    set setNombre(nombre){
        this._nombre = nombre;

    }

    get getApelido() {
        return this._apellido;
    }

    set setApelido(apellido) {
        this._apellido = apellido;

    }
}