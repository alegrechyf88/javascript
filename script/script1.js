
const plantelCompleto = [
    {
        id: 'jug1',
        camiseta: "(1)",
        jugador: "Jorge Broun",
        estado: "habilitado",
        sueldo: 50000,
        edad: 37,
        partidos: 387,
        posicion: 'Arquero'},

 {
        id: 'jug2',
        camiseta: "(2)",
        jugador:'Carlos Quintana',
        estado: "habilitado",
        sueldo: 75000,
        edad: 35,
        partidos: 33,
        posicion: "Central"},

{
        id: 'jug3',
        camiseta: "(3)",
        jugador: "Agustín Sandez",
        estado: "habilitado",
        sueldo: 20000,
        edad: 22,
        partidos: 6,
        posicion: "Lateral izquierdo"},

 {
        id: 'jug4',
        camiseta: "(4)",
        jugador: "Damían Martinez",
        estado: "habilitado",
        sueldo: 40000,
        edad: 33,
        partidos: 121,
        goles: 8,
        posicion: "Lateral derecho"},

 {
        camiseta: "(5)",
        jugador: "Francis Mac Allister",
        estado: "lesionado",
        sueldo: 35000,
        edad: 27,
        partidos: 38,
        goles: 1,
        posicion: "Mediocentro"},
 {
        camiseta: "(6)",
        jugador: "Juan Cruz Komar",
        estado: "habilitado",
        sueldo: 55000,
        edad: 27,
        partidos: 43,
        goles: 1,
        posicion: "Central"},
{
        camiseta: "(7)",
        jugador: "Walter Montoya",
        estado: "lesionado",
        sueldo: 80000,
        edad: 30,
        partidos: 104, 
        goles: 9,
        posicion: "Medio derecho"},

 {
        camiseta: "(8)",
        jugador: "Agustin Toledo",
        estado: "habilitado",
        sueldo: 18000,
        edad: 23,
        posicion: "Mediocentro"},

 {
        camiseta: "(9)",
        jugador: "Tobias Cervera",
        estado: "habilitado",
        sueldo: 15000,
        edad: 21,
        posicion: "Delantero"},

 {
        camiseta: "(10)",
        jugador:"Ignacio Malcorra",
        estado: "habilitado",
        sueldo: 50000,
        edad: 36,
        posicion: "Mediapunta"},

 {
        camiseta: "(11)",
        jugador: "Maxi Lovera",
        estado: "habilitado",
        sueldo: 80000,
        edad: 24,
        posicion: "Mediapunta"},
 {
        camiseta: "(13)",
        jugador: "Jamilton Campaz",
        estado: "habilitado",
        sueldo: 90000,
        edad: 23,
        posicion: "Medio izquierdo"},
 {
        camiseta: "(14)",
        jugador: "Dannovi Quinonez",
        estado: "habilitado",
        sueldo: 10000,
        edad: 22,
        posicion: "Mediocentro"},

{
        camiseta: "(15)",
        jugador:"Facundo Mallo",
        estado: "habilitado",
        sueldo: 40000,
        edad: 28,
        posicion: "Central"},

{
        camiseta: "(16)",
        jugador: "Alan Rodriguez",
        estado: "habilitado",
        sueldo: 40000,
        edad: 23,
        posicion: "Lateral izquierdo"},

{
        camiseta: "(17)",
        jugador: "Ulises Ciccioli",
        estado: "habilitado",
        sueldo: 40000,
        edad: 20,
        posicion: "Lateral derecho"},

 {
        camiseta: "(18)",
        jugador: "Francesco Lo Celso",
        estado: "lesionado",
        sueldo: 20000,
        edad: 23,
        posicion: "Medio derecho"},
{
        camiseta: "(20)",
        jugador: "Axel Werner",
        estado: "habilitado",
        sueldo: 30000,
        edad: 27,
        posicion: "Arquero"},
 {
        camiseta: "(21)",
        jugador: "Valentino Quintero",
        estado: "habilitado",
        sueldo: 30000,
        edad: 20,
        posicion: "Arquero"},
{
        camiseta: "(22)",
        jugador: "Lautaro Giaconne",
        sueldo: 40000,
        edad: 22,
        posicion: "Medio derecho"},
 {
        camiseta: "(24)",
        jugador: "Octavio Bianchi",
        estado: "habilitado",
        sueldo: 30000,
        edad: 22,
        posicion: "Medio derecho"},

 {
        camiseta: "(26)",
        jugador: "Ismael Cortez",
        estado: "habilitado",
        sueldo: 22000,
        edad: 21,
        posicion: "Lateral derecho"},
{
        camiseta: "(29)",
        jugador: "Luca martinez Dupuy",
        estado: "habilitado",
        sueldo: 22000,
        edad: 22,
        posicion: "Delantero"},
{
        camiseta: "(30)",
        jugador: "Tomas Oconnor",
        estado: "habilitado",
        sueldo: 30000,
        edad: 19,
        posicion: "Medio derecho"},
{
        camiseta: "(31)",
        jugador: "Facundo Aguero",
        estado: "habilitado",
        sueldo: 40000,
        edad: 28,
        posicion: "Central"},
{
        camiseta: "(36)",
        jugador: "Cristian Bonesso",
        estado: "habilitado",
        sueldo: 10000,
        edad: 19,
        posicion: "Delantero"},
{
        camiseta: "(39)",
        jugador:"Fabricio Oviedo",
        estado: "habilitado",
        sueldo: 10000,
        edad: 19,
        posicion: "Delantero"},
{
        camiseta: "(44)",
        jugador: "Agustín Modica",
        estado: "habilitado",
        sueldo: 10000,
        edad: 22,
        posicion: "Delantero"},


{
        camiseta: "(45)",
        jugador: "Kevin Ortiz",
        estado: "lesionado",
        sueldo: 22000,
        edad: 23,
        posicion: "Mediocentro"}]


/*       let nSocio = prompt ("Ingresá tu número de socio")

        function login() {
        
            let Passw = prompt('Ingrese tu contraseña..');
            let ingresar = false;
            let intentos = 3;
        
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
            let opcion = prompt("Seleccione Fecha: \n(1) Vs Bandield \n(2) Atl. Tucumán \n(3) Talleres \n(4) Colón \n(5) Independiente \n(6) Gym LP \n(7) Newells");
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
                    case '7': alert('Fecha 7 Formacion vs Newells:'
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
                    + '\n  ' + j45.camiseta + ' - ' + j45.apellido
                    + '\n  ' + j13.camiseta + ' - ' + j13.apellido
                    + '\n  ' + 'Delanteros: '
                    + '\n  ' + j11.camiseta + ' - ' + j11.apellido
                    + '\n  ' + j9.camiseta + ' - ' + j9.apellido)
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
            const fecha = ["Rosario Central", "Atl. Tucumán", "Banfield", "Talleres", "Colón", "Independiente", "Gym Lp", "Newells", "Huracán", "Velez", "Instituto", "Argentinos", "Barracas Central", "River Plate", "Arsenal"]
let ConsultaFecha = prompt  ("Consulta la fecha, ingresando el nº de fecha");


       break;

        case '5':
            alert('Gracias por consultar nuestra pagina!');
            break;

        default:
            alert('Opción no válida. Por favor, selecciona una opción válida.');
    }


} while (rosarioc !== '5'); 


*/

const sumaEdades = plantelCompleto.reduce((acumulador, jugador) => acumulador + jugador.edad, 0);

const promedioEdades = sumaEdades / plantelCompleto.length;

console.log(`El promedio de edad del plantel es: ${promedioEdades}`);



if (promedioEdades >= 26) {
    console.log ("Es un equipo con experiencia")
    
} else {
    console.log("Es un equipo joven,necesita sumar jugadores de experiencia")
}


    const plantelPrimera = document.getElementById("plantelprimera");


   /* plantelCompleto.forEach((plantelCompleto) => {  generar la planilla de jugadores

      const elementoLi = document.createElement("li");
      elementoLi.textContent = `${plantelCompleto.camiseta} ${plantelCompleto.jugador}, Posición: ${plantelCompleto.posicion}, Edad: ${plantelCompleto.edad}`;
      plantelPrimera.appendChild(elementoLi);
    }); */
    

    cantidadjugadores.innerHTML = (`Hoy Central cuenta en su plantel profesional con ${plantelCompleto.length} profesionales`); //Cuantos jugadores cuenta en el plantel

    edaddejugadores.innerHTML = (`El equipo cuenta con un plantel que promedia los ${Math.round(promedioEdades)} años de edad.`); //Promedio de edad del equipo 



    const sumaSueldos = plantelCompleto.reduce((acumulador, jugador) => acumulador + jugador.sueldo, 0);

    const promedioSueldos = sumaSueldos / plantelCompleto.length;
    
    console.log(`El sueldo promedio del plantel esde: ${promedioSueldos} dólares`);

    sueldopjugadores.innerHTML = (`El promedio de sueldos mensuales que el club paga es de U$S ${Math.round(promedioSueldos)}`); //Sueldos promedio del equipo


    
    let contenedor = document.createElement("div");



// genera recorrido por toda la plantilla, y muestra lo que se pide acontinuación como Nº camiseta, nombre, posición y edad
for (const plantilla of plantelCompleto) {
    contenedor.innerHTML += `
    <article class="plantel-cont">
        <div class="pl-cont">
        <h2>${plantilla.camiseta}</h2>
        <h2> - ${plantilla.jugador}</h2>
        <p> Posicion: ${plantilla.posicion}</p>
        <p> Edad: ${plantilla.edad}</p> 
        </div>
        </article>`;}

document.body.append(contenedor);



 