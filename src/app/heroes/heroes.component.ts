import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent {
  hero : Hero = {
    id : 1,
    name : 'Windstorm'
  };
  heroes = HEROES;
}
