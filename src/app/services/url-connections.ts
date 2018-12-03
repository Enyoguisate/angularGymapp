export const URL_CONECTIONS = {
    url: 'http://www.invictusgym.com.ar/consultas/',
    endPoints: {
        getTurnos: 'get_turnos.php', // req actividad
        getActividad: 'get_actividad.php',
        getRutinaDeterminada: 'get_rutinadet.php', // req alumno
        getAlumnosData: 'get_alumdata.php', // req usuario contrasena
        getAllAlumnos: 'get_all_alumnos.php',
        getAlumnoPorTurno: 'get_alumxturno.php', // req turno
        getActividadPorPromocion: 'get_activxprom.php', // req promocion
        postActividad: 'add_actividad.php', // req idactividad, nombre
        postCrearAlumno: 'create_alum.php', // req id nombre promocion vencimiento usuario contrasena
        postAddPromocion: 'add_promocion.php', // req idpromocion nombre
        postAddAlumno: 'add_alumno.php', // req idalumno nombre promocion vencimiento usuario contrasena
        postAddActividadPorPromocion: 'add_activxprom.php', // req idactividad idpromocion 
        postUpdateAlumno: 'update_alumno.php', // req id nombre promocion vencimiento usuario contrasena
        postAddAlumnoPorTurno: 'add_alumnoxturno.php', // req alumno turno estado
        delActividadPorPromocion: 'delete_activxprom.php', // req idactividad
    }













}

