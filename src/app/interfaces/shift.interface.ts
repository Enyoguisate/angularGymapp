export interface Shift {
    id?: number;
    idShift?: number;
    idActivity?: number;
    date?: string;
    time?: string;
    maxQuota?: number;
    quotaLeft?: number;
  }

  export interface ShiftInformation {
    trainerName: string;
    shiftName: string;
    quota: string;
    users: string[];
  }

  export interface ShiftResponseFromApi {
    turno: Turno[];
    success: number;
  }

  export interface Turno {
    actividad: string;
    cuota: string;
    cuotares: string;
    dia: string;
    idturnos: string;
    time: string;
  }