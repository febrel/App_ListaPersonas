const personas = [
    new Persona("Luis", "Febre"),
    new Persona("Carmen", "Lopez"),
    new Persona("Daniela", "Jaramillo"),

];


function mostrarPersonas() {
    console.log("Mostrando Personas");

    let texto = "";
    for (let persona of personas) {
        texto += `<li> ${persona.getNombre} ${persona.getApelido}</li>`;
    }

    document.getElementById('personas').innerHTML = texto;
}


function agregarPersona() {
    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];


    // Condicional para controlar que no este vacia
    if (nombre.value != "" && apellido.value != "") {
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    } else {
        console.log("No hay información que agregar");
    }


}