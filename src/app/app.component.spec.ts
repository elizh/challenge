import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;

  beforeEach(async(() => {
    app = new AppComponent();
  }))

  it('debe regresar un [[1]], entrada con valor 1 (no es multiplo de 3 ni 5)', async(() => {
    expect(app.generateNameArray(1)).toEqual([[1]]);
  }));

  it('debe regresar un [[Música],[],[]], entrada con valor 3 (multiplo de 3)', async(() => {
    expect(app.generateNameArray(3)).toEqual([['Música'],[],[]]);
  }));

  it('debe regresar un [[],[IT],[]], entrada con valor 10 (multiplo de 5)', async(() => {
    expect(app.generateNameArray(10)).toEqual([[],['IT'],[]]);
  }));

  it('debe regresar un [[Música],[IT],[Musical]], entrada con valor 30 (multiplo de 3 y 5)', async(() => {
    expect(app.generateNameArray(30)).toEqual([['Música'],['IT'],['Musical']]);
  }));

  it('debe regresar un [[Música]], entrada con valor [[Música],[],[]] (elimina arreglos vacios)', async(() => {
    expect(app.filterNotEmpty([['Música'],[],[]])).toEqual([['Música']]);
  }));

  it('debe regresar Musical, entrada con valor [[Música],[IT],[Musical]] (convierte a string, la última posición del arreglo)', async(() => {
    expect(app.getNameLastPosition([['Música'],['IT'],['Musical']])).toEqual('Musical');
  }));

});
