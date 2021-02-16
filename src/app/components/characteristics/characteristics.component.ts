import { Component, DoCheck, Input } from '@angular/core';
import { characteristics } from 'src/app/interfaces/ofertas';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent  {

  @Input()
  charac : characteristics;
 

}
