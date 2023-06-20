import { Component,OnInit } from '@angular/core';
import {EquipoService,Paciente} from '../../services/equipo.service';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit{
  paciente:Paciente={
    id_paciente:'',
    nombre_completo:'',
    fecha_nacimiento:'',
    genero:'',
    direccion:'',
    telefono:'',
    correo_electronico:'',
    numero_seguro_medico:'',
    razon_cita:'',
    sintomas_quejas:'',
    fecha_registro:'',
    estado_cita:''
  }
  ngOnInit(): void {
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    console.log('id de entrada: '+id_entrada)

    if(id_entrada){
      this.equipoService.getPanciente(id_entrada).subscribe(
        {next: (res: any)=>{
          this.paciente=res
        },
        error: (err: any)=>console.log(err)
    });
    }
  }
  constructor(private equipoService:EquipoService, private router:Router, private activeRoute:ActivatedRoute) { }
  modificar(){
    this.equipoService.editPaciente(this.paciente.id_paciente,this.paciente).subscribe(
      {next: (res: any)=>{
        this.paciente=res
      },
      error: (err: any)=>console.log(err)
  });

    this.router.navigate(['/inicio'])
  }
}
