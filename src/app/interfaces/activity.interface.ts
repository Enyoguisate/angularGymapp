export interface Activity {
    idActivity?: number;
    nombre?: string;
  }


  export interface ActivityResponseFromApi {
    actividad: Activity[];
    success: number;
  }