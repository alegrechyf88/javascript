const j1 = {
    camiseta: "(1)",
    nombre: "Jorge",
    apellido: "Broun",
    estado: "habilitado",
    edad: 37,
    posicion: "arquero"
}

const j2 = {
    camiseta: "(2)",
    nombre: "Carlos",
    apellido: "Quintana",
    estado: "habilitado",
    edad: 35,
    posicion: "central"
}

const j3 = {
    camiseta: "(3)",
    nombre: "Agustín",
    apellido: "Sandez",
    estado: "habilitado",
    edad: 22,
    posicion: "lateral izq"
}

const j4 = {
    camiseta: "(4)",
    nombre: "Damían",
    apellido: "Martinez",
    estado: "habilitado",
    edad: 33,
    posicion: "lateral der"
}

const j5 = {
    camiseta: "(5)",
    nombre: "Mac Allister",
    apellido: "Francis",
    estado: "lesionado",
    edad: 27,
    posicion: "mediocentro"
}
const j6 = {
    camiseta: "(6)",
    nombre: "Juan Cruz",
    apellido: "Komar",
    estado: "habilitado",
    edad: 27,
    posicion: "central"
}

const j7 = {
    camiseta: "(7)",
    nombre: "Walter",
    apellido: "Montoya",
    estado: "lesionado",
    edad: 30,
    posicion: "medio derecho"
}

const j8 = {
    camiseta: "(8)",
    nombre: "Agustin",
    apellido: "Toledo",
    estado: "habilitado",
    edad: 23,
    posicion: "mediocentro"
}

const j9 = {
    camiseta: "(9)",
    nombre: "Tobias",
    apellido: "Cervera",
    estado: "habilitado",
    edad: 21,
    posicion: "Delantero"
}

const j10 = {
    camiseta: "(10)",
    nombre: "Ignacio",
    apellido: "Malcorra",
    estado: "habilitado",
    edad: 36,
    posicion: "mediapunta"
}

const j11 = {
    camiseta: "(11)",
    nombre: "Maxi",
    apellido: "Lovera",
    estado: "habilitado",
    edad: 24,
    posicion: "mediapunta"
}
const j13 = {
    camiseta: "(13)",
    nombre: "Jamilton",
    apellido: "Campaz",
    estado: "habilitado",
    edad: 23,
    posicion: "medio izq"
}
const j14 = {
    camiseta: "(14)",
    nombre: "Daddoni",
    apellido: "Quinonez",
    estado: "habilitado",
    edad: 22,
    posicion: "mediocentro"
}

const j15 = {
    camiseta: "(15)",
    nombre: "Facundo",
    apellido: "Mallo",
    estado: "habilitado",
    edad: 28,
    posicion: "central"
}

const j16 = {
    camiseta: "(16)",
    nombre: "Alan",
    apellido: "Rodriguez",
    estado: "habilitado",
    edad: 23,
    posicion: "lateral izq"
}

const j17 = {
    camiseta: "(17)",
    nombre: "Ulises",
    apellido: "Ciccioli",
    estado: "habilitado",
    edad: 20,
    posicion: "lateral der"
}

const j18 = {
    camiseta: "(18)",
    nombre: "Francesco",
    apellido: "Lo Celso",
    estado: "lesionado",
    edad: 23,
    posicion: "medio derecho"
}
const j20 = {
    camiseta: "(20)",
    nombre: "Axel",
    apellido: "Werner",
    estado: "habilitado",
    edad: 27,
    posicion: "arquero"
}
const j21 = {
    camiseta: "(21)",
    nombre: "Valentino",
    apellido: "Quintero",
    estado: "habilitado",
    edad: 20,
    posicion: "arquero"
}
const j22 = {
    camiseta: "(22)",
    nombre: "Lautaro",
    apellido: "Giaconne",
    estado: "habilitado",
    edad: 22,
    posicion: "medio derecho"
}
const j24 = {
    camiseta: "(24)",
    nombre: "Octavio",
    apellido: "Bianchi",
    estado: "habilitado",
    edad: 22,
    posicion: "medio derecho"
}

const j26 = {
    camiseta: "(26)",
    nombre: "Ismael",
    apellido: "Cortez",
    estado: "habilitado",
    edad: 21,
    posicion: "lateral der"
}
const j29 = {
    camiseta: "(29)",
    nombre: "Luca",
    apellido: "martinez Dupuy",
    estado: "habilitado",
    edad: 22,
    posicion: "Delantero"
}
const j30 = {
    camiseta: "(30)",
    nombre: "Tomas",
    apellido: "Oconnor",
    estado: "habilitado",
    edad: 19,
    posicion: "amedio derecho"
}
const j31 = {
    camiseta: "(31)",
    nombre: "Facundo",
    apellido: "Aguero",
    estado: "habilitado",
    edad: 28,
    posicion: "central"
}
const j36 = {
    camiseta: "(36)",
    nombre: "Cristian",
    apellido: "Bonesso",
    estado: "habilitado",
    edad: 19,
    posicion: "Delantero"
}
const j39 = {
    camiseta: "(39)",
    nombre: "Fabricio",
    apellido: "Oviedo",
    estado: "habilitado",
    edad: 19,
    posicion: "Delantero"
}
const j44 = {
    camiseta: "(44)",
    nombre: "Agustín",
    apellido: "Modica",
    estado: "habilitado",
    edad: 22,
    posicion: "Delantero"
}

const j45 = {
    camiseta: "(45)",
    nombre: "Kevin",
    apellido: "Ortiz",
    estado: "lesionado",
    edad: 23,
    posicion: "mediocentro"
}

let nSocio = prompt("Ingresá tu número de socio")

function login() {

    let Passw = prompt('Ingrese tu contraseña..');
    let ingresar = false;
    let intentos = 5;

    for (let i = intentos; i > 0; i--) {
        let logPass = prompt('Ingresá la contraseña, Tenés ' + i + ' intento/s.');
        if (Passw === logPass) {
            alert('Bienvenido/a socio nº ' + nSocio);
            ingresar = true;
            break;
        } else {
            alert('Error, Te quedan ' + (i - 1) + ' intento/s.');
        }
    }
}

if (login()) {

}


let rosarioc;

do {
    rosarioc = prompt("Información del canalla: \n (1) Plantilla 2023\n (2) Partidos jugados  \n (3) Consulta lesionados  \n (4) Próximas fechas \n (5) Salir");

    switch (rosarioc) {




        case '1': alert('Plantilla 2023:'
            + '\n' + j1.camiseta + " " + j1.nombre + " " + j1.apellido
            + '\n' + j2.camiseta + " " + j2.nombre + " " + j2.apellido
            + '\n' + j3.camiseta + " " + j3.nombre + " " + j3.apellido
            + '\n' + j4.camiseta + " " + j4.nombre + " " + j4.apellido
            + '\n' + j5.camiseta + " " + j5.nombre + " " + j5.apellido
            + '\n' + j6.camiseta + " " + j6.nombre + " " + j6.apellido
            + '\n' + j7.camiseta + " " + j7.nombre + " " + j7.apellido
            + '\n' + j8.camiseta + " " + j8.nombre + " " + j8.apellido
            + '\n' + j9.camiseta + " " + j9.nombre + " " + j9.apellido
            + '\n' + j10.camiseta + " " + j10.nombre + " " + j10.apellido
            + '\n' + j11.camiseta + " " + j11.nombre + " " + j11.apellido
            + '\n' + j13.camiseta + " " + j13.nombre + " " + j13.apellido
            + '\n' + j14.camiseta + " " + j14.nombre + " " + j14.apellido
            + '\n' + j16.camiseta + " " + j16.nombre + " " + j16.apellido
            + '\n' + j17.camiseta + " " + j17.nombre + " " + j17.apellido
            + '\n' + j18.camiseta + " " + j18.nombre + " " + j18.apellido
            + '\n' + j20.camiseta + " " + j20.nombre + " " + j20.apellido
            + '\n' + j21.camiseta + " " + j21.nombre + " " + j21.apellido
            + '\n' + j22.camiseta + " " + j22.nombre + " " + j22.apellido
            + '\n' + j24.camiseta + " " + j24.nombre + " " + j24.apellido
            + '\n' + j26.camiseta + " " + j26.nombre + " " + j26.apellido
            + '\n' + j29.camiseta + " " + j29.nombre + " " + j29.apellido
            + '\n' + j30.camiseta + " " + j30.nombre + " " + j30.apellido
            + '\n' + j31.camiseta + " " + j31.nombre + " " + j31.apellido
            + '\n' + j36.camiseta + " " + j36.nombre + " " + j36.apellido
            + '\n' + j39.camiseta + " " + j39.nombre + " " + j39.apellido
            + '\n' + j44.camiseta + " " + j44.nombre + " " + j44.apellido
            + '\n' + j45.camiseta + " " + j45.nombre + " " + j45.apellido)
            break;

        case '2':
            let opcion = prompt("Seleccione Fecha: \n(1) Vs Bandield \n(2) Atl. Tucumán \n(3) Talleres \n(4) Colón \n(5) Independiente \n(6) Gym LP");
            switch (opcion) {
                case '1': alert('Fecha 1: Formacion vs Banfield:'
                    + '\n ' + 'Arquero:'
                    + '\n  ' + j1.camiseta + ' - ' + j1.apellido
                    + '\n ' + 'Defensores: '
                    + '\n  ' + j6.camiseta + ' - ' + j6.apellido
                    + '\n  ' + j15.camiseta + ' - ' + j15.apellido
                    + '\n  ' + j2.camiseta + ' - ' + j2.apellido
                    + '\n ' + 'Mediocampistas: '
                    + '\n  ' + j17.camiseta + ' - ' + j17.apellido
                    + '\n  ' + j30.camiseta + ' - ' + j45.apellido
                    + '\n  ' + j45.camiseta + ' - ' + j22.apellido
                    + '\n  ' + j16.camiseta + ' - ' + j16.apellido
                    + '\n  ' + 'Delanteros: '
                    + '\n  ' + j10.camiseta + ' - ' + j10.apellido
                    + '\n  ' + j24.camiseta + ' - ' + j24.apellido
                    + '\n  ' + j13.camiseta + ' - ' + j13.apellido)
                    break;
                case '2': alert('Fecha 2: Formacion vs Atl Tucumán:'
                    + '\n ' + 'Arquero:'
                    + '\n  ' + j1.camiseta + ' - ' + j1.apellido
                    + '\n ' + 'Defensores: '
                    + '\n  ' + j26.camiseta + ' - ' + j26.apellido
                    + '\n  ' + j15.camiseta + ' - ' + j15.apellido
                    + '\n  ' + j2.camiseta + ' - ' + j2.apellido
                    + '\n  ' + j16.camiseta + ' - ' + j16.apellido
                    + '\n ' + 'Mediocampistas: '
                    + '\n  ' + j45.camiseta + ' - ' + j45.apellido
                    + '\n  ' + j30.camiseta + ' - ' + j30.apellido
                    + '\n  ' + j22.camiseta + ' - ' + j22.apellido
                    + '\n  ' + j10.camiseta + ' - ' + j10.apellido
                    + '\n  ' + j13.camiseta + ' - ' + j13.apellido
                    + '\n  ' + 'Delanteros: '
                    + '\n  ' + j24.camiseta + ' - ' + j24.apellido)
                    break;
                case '3': alert('Fecha 3: Formacion vs Talleres:'
                    + '\n ' + 'Arquero:'
                    + '\n  ' + j1.camiseta + ' - ' + j1.apellido
                    + '\n ' + 'Defensores: '
                    + '\n  ' + j4.camiseta + ' - ' + j4.apellido
                    + '\n  ' + j15.camiseta + ' - ' + j15.apellido
                    + '\n  ' + j2.camiseta + ' - ' + j2.apellido
                    + '\n  ' + j16.camiseta + ' - ' + j16.apellido
                    + '\n ' + 'Mediocampistas: '
                    + '\n  ' + j8.camiseta + ' - ' + j8.apellido
                    + '\n  ' + j30.camiseta + ' - ' + j30.apellido
                    + '\n  ' + j22.camiseta + ' - ' + j22.apellido
                    + '\n  ' + j10.camiseta + ' - ' + j10.apellido
                    + '\n  ' + j13.camiseta + ' - ' + j13.apellido
                    + '\n  ' + 'Delanteros: '
                    + '\n  ' + j24.camiseta + ' - ' + j24.apellido)
                    break;
                case '4': alert('Fecha 4: Formacion vs Colón:'
                    + '\n ' + 'Arquero:'
                    + '\n  ' + j1.camiseta + ' - ' + j1.apellido
                    + '\n ' + 'Defensores: '
                    + '\n  ' + j4.camiseta + ' - ' + j4.apellido
                    + '\n  ' + j15.camiseta + ' - ' + j15.apellido
                    + '\n  ' + j2.camiseta + ' - ' + j2.apellido
                    + '\n  ' + j16.camiseta + ' - ' + j16.apellido
                    + '\n ' + 'Mediocampistas: '
                    + '\n  ' + j30.camiseta + ' - ' + j30.apellido
                    + '\n  ' + j8.camiseta + ' - ' + j8.apellido
                    + '\n  ' + j10.camiseta + ' - ' + j10.apellido
                    + '\n  ' + 'Delanteros: '
                    + '\n  ' + j22.camiseta + ' - ' + j22.apellido
                    + '\n  ' + j24.camiseta + ' - ' + j24.apellido
                    + '\n  ' + j13.camiseta + ' - ' + j13.apellido)
                    break;
                case '5': alert('Fecha 5: Formacion vs Independiente:'
                    + '\n ' + 'Arquero:'
                    + '\n  ' + j1.camiseta + ' - ' + j1.apellido
                    + '\n ' + 'Defensores: '
                    + '\n  ' + j4.camiseta + ' - ' + j4.apellido
                    + '\n  ' + j31.camiseta + ' - ' + j31.apellido
                    + '\n  ' + j2.camiseta + ' - ' + j2.apellido
                    + '\n  ' + j16.camiseta + ' - ' + j16.apellido
                    + '\n ' + 'Mediocampistas: '
                    + '\n  ' + j30.camiseta + ' - ' + j30.apellido
                    + '\n  ' + j8.camiseta + ' - ' + j8.apellido
                    + '\n  ' + j22.camiseta + ' - ' + j22.apellido
                    + '\n  ' + j10.camiseta + ' - ' + j10.apellido
                    + '\n  ' + j13.camiseta + ' - ' + j13.apellido
                    + '\n  ' + 'Delanteros: '
                    + '\n  ' + j9.camiseta + ' - ' + j9.apellido)
                    break;
                case '6': alert('Fecha 6 Formacion vs Gym LP:'
                    + '\n ' + 'Arquero:'
                    + '\n  ' + j1.camiseta + ' - ' + j1.apellido
                    + '\n ' + 'Defensores: '
                    + '\n  ' + j4.camiseta + ' - ' + j4.apellido
                    + '\n  ' + j31.camiseta + ' - ' + j31.apellido
                    + '\n  ' + j6.camiseta + ' - ' + j6.apellido
                    + '\n  ' + j3.camiseta + ' - ' + j3.apellido
                    + '\n ' + 'Mediocampistas: '
                    + '\n  ' + j30.camiseta + ' - ' + j30.apellido
                    + '\n  ' + j8.camiseta + ' - ' + j8.apellido
                    + '\n  ' + j16.camiseta + ' - ' + j16.apellido
                    + '\n  ' + 'Delanteros: '
                    + '\n  ' + j22.camiseta + ' - ' + j22.apellido
                    + '\n  ' + j9.camiseta + ' - ' + j9.apellido
                    + '\n  ' + j13.camiseta + ' - ' + j13.apellido)
                    break;
                default:
                    alert('Selección invalida.');
            }


        case '3':
            if (prompt("Escriba (j + numero de camiseta) Consulte jugador: ") == "lesionado") {
                alert("El jugador no está en optimas condiciones físicas")
            }
            else {
                alert("El jugador puede jugar")
            }
            break;
        case '4':

        case '5':
            alert('Gracias por consultar nuestra pagina!');
            break;

        default:
            alert('Opción no válida. Por favor, selecciona una opción válida.');
    }


} while (rosarioc !== '5'); 
