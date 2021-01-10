import { Component, OnInit } from '@angular/core';
import { Chanteur } from '../model/chanteur.model';
import { ActivatedRoute,Router } from '@angular/router';
import { ChanteurService } from '../services/chanteur.service';

@Component({
  selector: 'app-update-chanteur',
  templateUrl: './update-chanteur.component.html',
  styles: [
  ]
})
export class UpdateChanteurComponent implements OnInit {
  currentChanteur = new Chanteur();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private chanteurService: ChanteurService) {}

  ngOnInit(): void {
    this.currentChanteur = this.chanteurService.consulterChanteur(this.activatedRoute.snapshot.params.id);
    console.log(this.currentChanteur);
  }
  updateChanteur() {
    //console.log(this.currentChanteur);
    this.chanteurService.updateChanteur(this.currentChanteur);
    this.router.navigate(['chanteur']);
  }
}
