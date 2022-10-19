export class ComboCustomElement {
  testak: any;
  testDiv: any;

  attached() {
    if (this.testak) {
      console.log("21", this.testak);
    } else {
      console.log("22", this.testak);
    }
    if (this.testDiv) {
      console.log("211", this.testDiv);
    } else {
      console.log("222", this.testDiv);
    }
  }

  detached() {
    if (this.testak) {
      console.log("1", this.testak);
    } else {
      console.log("2", this.testak);
    }
    if (this.testDiv) {
      console.log("11", this.testDiv);
    } else {
      console.log("22", this.testDiv);
    }
  }
}
