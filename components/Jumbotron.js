const jumbotronData = [{}];
class Jumbotron {
  constructor(props) {
    this.state = props;
  }
  /**
   * render()
   * @returns an array of HTMLdivElements to be looped in
   */
  render() {
    const [webHeadingDiv, personImgDiv, coderHeadingDiv] = [
      document.createElement("div"),
      document.createElement("div"),
      document.createElement("div"),
    ];
    Object.assign(webHeadingDiv, { className: "web-heading" });
    webHeadingDiv.innerHTML = `<h1><web></h1>`;
    Object.assign(personImgDiv, { className: "person-img" });
    personImgDiv.innerHTML = `<img src="">`;
    Object.assign(coderHeadingDiv, { className: "coder-heading" });
    coderHeadingDiv.innerHTML = `<h1>juumbo</h1>`;
    return [webHeadingDiv, personImgDiv, coderHeadingDiv];
  }
}

let jumbotronComponent = new Jumbotron();
document.addEventListener("DOMContentLoaded", function () {
  jumbotronComponent
    .render()
    .forEach((item) => document.querySelector(".jumbotron").appendChild(item));
});
