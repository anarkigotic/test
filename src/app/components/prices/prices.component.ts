import { Component, DoCheck, Input } from '@angular/core';
import { productOfferingPrices } from 'src/app/interfaces/ofertas';
import { isArray } from 'util';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements DoCheck {
  @Input()
  price: any;
  ngDoCheck(): void {
    if (isArray(this.price)) {
      this.price = this.price.map(ele => {
        return {
          "name": ele.id,
          "monto": ele.versions[0].price.amount
        }
      })
    }

  }

}
