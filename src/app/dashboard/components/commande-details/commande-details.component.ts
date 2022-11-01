import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { SweetAlertService } from 'src/app/providers/sweet-alert.service';
import { CommandesService } from 'src/app/services/commandes.service';

@Component({
  selector: 'app-commande-details',
  templateUrl: './commande-details.component.html',
  styleUrls: ['./commande-details.component.css']
})
export class CommandeDetailsComponent implements OnInit {
  commandeDetails: any;

  constructor(private commandesService: CommandesService,
    private toastService: ToastService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadDetails();
  }

  loadDetails() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.commandesService.getCommandeDetails(id).subscribe((res: any) => {
      this.commandeDetails = res.data;
    }, (error: any) => {
      this.toastService.error(`${error?.error?.message}`);
    });
  }

}
