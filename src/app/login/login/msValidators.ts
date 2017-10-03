
export class MsValidators {

  static notNir (control) {
    return new Promise( resolve => {
      setTimeout( () => resolve(null), 4000);
    });
  }
}
