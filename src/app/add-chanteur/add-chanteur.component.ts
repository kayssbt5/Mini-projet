import { Component, OnInit } from '@angular/core';
import { Chanteur } from '../model/chanteur.model';
import { ChanteurService } from '../services/chanteur.service';

@Component({
  selector: 'app-add-chanteur',
  templateUrl: './add-chanteur.component.html'
})
export class AddChanteurComponent implements OnInit {
  newChanteur = new Chanteur();

  message : string;
  constructor(private chanteurService : ChanteurService) { }

  ngOnInit(): void {
  }
  addChanteur(){
    //console.log(this.newChanteur);
   this.chanteurService.ajouterChanteur(this.newChanteur);
   this.message = "Chanteur " + this.newChanteur.nomChanteur + " ajouté avec succès !"
  }
}
