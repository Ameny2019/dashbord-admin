import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CommandesService } from 'src/app/services/commandes.service';
import { ToastService } from 'angular-toastify';
import { SweetAlertService } from 'src/app/providers/sweet-alert.service';

@Component({
  selector: 'app-listcommandes',
  templateUrl: './listcommandes.component.html',
  styleUrls: ['./listcommandes.component.css']
})
export class ListcommandesComponent implements OnInit {

  commandes: any;

  constructor(private commandesService: CommandesService,
    private toastService: ToastService,
    private sweetAlertService: SweetAlertService,) { }


  ngOnInit(): void {
    this.getcommande();
  }

  getcommande() {
    this.commandesService.getCommandes().subscribe((res: any) => {
      this.commandes = res.data;
    });
  }

  deleteCommande(id: any) {
    this.sweetAlertService.deleteConfirmation().then((result) => {
      if (result.value) {
        this.commandesService.deleteCommande(id).subscribe((response: any) => {
          this.toastService.success(response?.message);
          this.getcommande();
        }, (error: any) => {
          this.toastService.error(`${error?.error?.message}`);
        });
      }
    });
  }

}
