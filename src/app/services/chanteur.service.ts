import { Injectable } from '@angular/core';
import { Chanteur } from '../model/chanteur.model';

@Injectable({
  providedIn: 'root'
})
export class ChanteurService {
  chanteurs : Chanteur[];
  chanteur : Chanteur;
  constructor() {
    this.chanteurs = [
      {idChanteur  :  1,	nomChanteur  :  "PNL",  paysChanteur  :  "France",  dateDernieralbum  :  new  Date("01/14/2011")},
      {idChanteur  :  2,	nomChanteur  :  "MMZ",  paysChanteur  :  "France",  dateDernieralbum  :  new  Date("12/17/2010")},
      {idChanteur  :  3,	nomChanteur  :  "DTF",  paysChanteur  :  "France",  dateDernieralbum  :  new  Date("02/20/2020")},
      {idChanteur  :  4,	nomChanteur  :  "F430",  paysChanteur  :  "France",  dateDernieralbum  :  new  Date("05/18/2020")}

    ];
  }
  listeChanteurs():Chanteur []{
    return this.chanteurs;
  }
  ajouterChanteur( chanteur : Chanteur ){
    this.chanteurs.push(chanteur);
  }
  supprimerChanteur(c: Chanteur){
    //supprimer le chanteur c du tableau chanteurs
    const index = this.chanteurs.indexOf(c, 0);
    if (index > -1) {
    this.chanteurs.splice(index, 1);
    }
    //ou Bien
    /* this.chanteurs.forEach((cur, index) => {
    if(c.idChanteur === cur.idChanteur) {
    this.chanteurs.splice(index, 1);
    }
    }); */
    }
    consulterChanteur(id:number): Chanteur{
      this.chanteur = this.chanteurs.find(c => c.idChanteur == id);
      return this.chanteur
      }
      updateChanteur(c:Chanteur)
    {
    // console.log(p);
    this.supprimerChanteur(c);
    this.ajouterChanteur(c);
    this.trierChanteurs();
    }
    trierChanteurs(){
      this.chanteurs = this.chanteurs.sort((n1,n2) => {
      if (n1.idChanteur > n2.idChanteur) {
      return 1;
      }
      if (n1.idChanteur < n2.idChanteur) {
      return -1;
      }
      return 0;
      });
      }
    }
