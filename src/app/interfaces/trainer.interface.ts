export interface Trainer {
    id?: number;
    idTrainer?: number;
    name?: string;
}

export interface AlumnosPorTurnoTrainer {
  success?: number;
  turno?: TurnoAlumnosPorTurnoTrainer[];
}

export interface TurnoAlumnosPorTurnoTrainer {
  nombre?: string;
}
