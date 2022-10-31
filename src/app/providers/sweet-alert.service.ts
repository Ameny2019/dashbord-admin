import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  deleteConfirmation()
  {
    return Swal.fire({
      title: `Êtes-vous sûr?`,
      text: `Voulez-vous vraiment supprimer cette enregistrement?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4dbd74',
      cancelButtonColor: '#f86c6b',
      confirmButtonText: `<i class="fa fa-check" aria-hidden="true"></i> Oui, supprimez-le`,
      cancelButtonText: `<i class="fa fa-times" aria-hidden="true"></i> Non, annuler`
    });
  }
}
