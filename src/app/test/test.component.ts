import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  test='hello world test'
  isDisabled=true
  isRed=false
  isBlackBg=false
  email="aaaa@ggg.com"
  changeCol():void{
    if(this.isRed === true){
      this.isRed=false
    }else{
      this.isRed=true
    }
      
  }
  changeRed(isRed:boolean):void{
    this.isRed=isRed

  }

}
