export interface User {
    username?: string;
    password?: string;
    id?: number;
    firstName?: string;
    lastName?: string;
    token?: string;
  }

  export interface Alumno {
    contrasena: string;
    idalumno: string;
    nombre: string;
    promocion: string;
    usuario: string;
    vencimiento: string;
    token?: string;
  }

  export interface AlumnoApiResponse {
    alumno: Alumno[];
    success: number;
  }