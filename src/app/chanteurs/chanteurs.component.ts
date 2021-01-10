import { Component, OnInit } from '@angular/core';
import { Chanteur } from '../model/chanteur.model';
import { ChanteurService } from '../services/chanteur.service';

@Component({
  selector: 'app-chanteurs',
  templateUrl: './chanteurs.component.html',
})
export class ChanteursComponent implements OnInit {

  chanteurs : Chanteur[];
  constructor( private  chanteurService : ChanteurService ) {
    this.chanteurs = chanteurService.listeChanteurs();
    
   }

  ngOnInit(): void {
  }
  supprimerChanteur(c: Chanteur)
{
//console.log(c);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.chanteurService.supprimerChanteur(c);

}
}
