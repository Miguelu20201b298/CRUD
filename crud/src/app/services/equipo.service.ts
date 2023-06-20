import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url='/api';//el api
  constructor(private http: HttpClient) { }

  //get Equipos
  getPacientes()
  {
    return this.http.get<Paciente[]>(this.url);
  }

  //get un Equipo
  getPanciente(id:string)
  {
    return this.http.get<Paciente>(this.url+'/'+id);
  }

  //agregar equipo
  addPaciente(paciente:Paciente)
  {
    return this.http.post<Paciente>(this.url,paciente);
  }

  deletePaciente(id:string)
  {
    return this.http.delete(this.url+'/'+id);
  }

  editPaciente(id:string|any, paciente:Paciente)
  {
    return this.http.put(this.url+'/'+id,paciente);
  }
}

export interface Paciente{
  id_paciente?:string;
  nombre_completo?:string;
  fecha_nacimiento?:string;
  genero?:string;
  direccion?:string;
  telefono?:string;
  correo_electronico?:string;
  numero_seguro_medico?:string;
  razon_cita?:string;
  sintomas_quejas?:string;
  fecha_registro?:string;
  estado_cita?:string;
}
