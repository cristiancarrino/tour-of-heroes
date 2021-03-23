import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');

    return of(HEROES);
  }

  getHeroById(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero: Hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);

    return of(hero);
  }
}
