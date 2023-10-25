class usuariosBotanica {
    constructor(nombre, apellido, edad, mail , clave) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.mail = mail;
        this.clave = clave;

    }
}
const usuario1 = new usuariosBotanica ("Luna","Gatica",23,"lunag@gmail.com","chocolate23");
const usuario2 = new usuariosBotanica ("Carlos","Perez",31,"carlosp@gmail.com","river22");
const usuario3 = new usuariosBotanica ("Juana","Diaz",45,"jdiaz@gmail.com","toby11")

usuario1.nombre();
usuario2.nombre();
usuario3.nombre();












