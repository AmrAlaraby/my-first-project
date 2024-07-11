import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  row=1


  isIf=true
  name="amr"
  data=[{first:'amr',last:'ahmed',handle:'sdf'},{first:'amir',last:'ryad',handle:'sydf'},{first:'yasser',last:'hossam',handle:'dfvf'}]

}
