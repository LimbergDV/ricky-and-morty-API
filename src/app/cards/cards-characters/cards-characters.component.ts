import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-cards-characters',
  templateUrl: './cards-characters.component.html',
  styleUrl: './cards-characters.component.css'
})
export class CardsCharactersComponent implements OnInit{
  characters: any[] = [];

  constructor(private caractersService: CharacterService) {}

  ngOnInit(): void {
    this.caractersService.getAllCharacters().subscribe(
      (response) => {
        this.characters = response.results;
      },
      (error) => {
        console.error('Error fetching characters:', error);
      }
    );
  }

}
