import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'challenge';
  numbers: any = [];

  constructor(){
    this.main();
  }

  main(){
    for (let index = 1; index <= 100 ; index++) {
        const name = this.getNameLastPosition(this.filterNotEmpty(this.generateNameArray(index)));
        this.numbers.push(name);
    }
    
  }

  generateNameArray(number): Array<any> {
    const module3 = [number].filter(n => n % 3 == 0).map(() => 'Música');
    const module5 = [number].filter(n => n % 5 == 0).map(() => 'IT');
    const module3_5 = [number].filter(n => n % 3 == 0 && n % 5 == 0).map(() => 'Musical');

    if(!module3.length && !module5.length && !module3_5.length) {
      return [[number]];
    }

    return [module3,module5,module3_5]
  }

  filterNotEmpty(arrayNumbers): Array<any> {
    return arrayNumbers.filter(an => an.length);
  }

  getNameLastPosition(arrayNumbers): string{
    return arrayNumbers[arrayNumbers.length - 1].toString(); 
  }
}
