import { Component, DoCheck, OnInit , EventEmitter} from '@angular/core';
import { Oferta , productOfferingPrices, characteristics } from '../../interfaces/ofertas'
import * as ofertas from '../../..//assets/ofertas.json';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit, DoCheck {
  offert: any = ofertas;
  listOffert: [Oferta];
  opcionSeleccionado: Oferta;
  dataForm: FormGroup
  characteristics : characteristics;
  productOfferingPrices : productOfferingPrices;
  id : string;
  name : string;

  send: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.listOffert = this.offert.default;
    this.dataForm = new FormGroup({
      oferta: new FormControl(null)
    });
  }


  ngOnInit(): void {
     console.log(this.characteristics);

  }
  ngDoCheck() {
    if(this.dataForm.get('oferta').value){
        this.characteristics = this.dataForm.get('oferta').value.versions[0].characteristics;
        this.productOfferingPrices = this.dataForm.get('oferta').value.versions[0].productOfferingPrices;
        this.id = this.dataForm.get('oferta').value.versions[0].id;
        this.name = this.dataForm.get('oferta').value.versions[0].name;
    }
    
   
  }



}
