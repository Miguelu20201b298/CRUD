import { Component,OnInit } from '@angular/core';
import { EquipoService,Paciente} from '../../services/equipo.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{
 
  pacientes: any[]=[];

  constructor(private equipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
    this.listarEquipo();
  }
  listarEquipo()
  {
    this.equipoService.getPacientes().subscribe(
      (response: any) => {
        console.log(response)
        this.pacientes = response;
        console.log(this.pacientes)
      });
  }

  eliminar(id:any){
    this.equipoService.deletePaciente(id).subscribe({next: (res: any)=>{
      console.log('paciente eliminado');
      this.listarEquipo();
    },
    error: (err: any)=>console.log(err)});
  }

  modificar(id:any){
    this.router.navigate(['/edit/'+id]);
  }
}
