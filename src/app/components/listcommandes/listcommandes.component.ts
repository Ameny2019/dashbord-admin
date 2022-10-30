import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CommandesService } from 'src/app/services/commandes.service';

@Component({
  selector: 'app-listcommandes',
  templateUrl: './listcommandes.component.html',
  styleUrls: ['./listcommandes.component.css']
})
export class ListcommandesComponent implements OnInit {

  commandes:any;

  constructor(private commandesService:CommandesService) { }


    ngOnInit(): void {
      this.getcommande() ;    
    }
  
    getcommande(){
      this.commandesService.getcommande().subscribe((res:any) => {
        console.log("all products :",res.data);
        this.commandes = res.data;
      })
    }
  
    deletecommande(id_product:any){
  
  
      Swal.fire({
        title: 'etes vous sure?',
        text: "La supression de cet élément est irreversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, Supprimer!'
      }).then((result) => {
        if (result.isConfirmed) {
  
          this.commandesService.deletecommande(id_product).subscribe((res:any)=>{
            this.getcommande();
          })
  
          Swal.fire(
            'Supprimé!',
            'element supprimé avec succés.',
            'success'
          )
        }
      })
  
  
  
    }
  
  }
  