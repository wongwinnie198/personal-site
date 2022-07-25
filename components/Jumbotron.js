const jumbotronData = [{}];
class Jumbotron {
  constructor(props) {
    this.state = props;
  }
  _getImagePath() {
    return {
      person: "../public/jumbotron_coder.svg",
      word: "../public/jumbotron_word.jpg",
      color: "../public/jumbotron_waterColor.jpg",
    };
  }

  /**
   *
   * @param {obj}
   * {
   *
   * }
   * @param  {...any}
   */
  // _createDiv(customDiv, ...divs) {
  //   console.log(customDiv, ...divs);
  //   const customArr = [...customDiv, ...divs];

  //   Object.assign(document.createElement(customArr[0].tag), {
  //     className: customArr[0].className,
  //   });
  //   const testDiv = document.querySelector(`.${customArr[0].className}`);
  //   // testDiv.innerHTML = `<p>123</p>`;
  //   //   const divArr = [];
  //   customArr.map((item, _) => {
  //     // const testDiv = document.createElement(customArr[0].tag);
  //     // Object.assign(item, { className: `${item}` });
  //     //     // item.innerHTML = `<p>test</p>`
  //     //     divArr.push(item);
  //     //     console.log(item)
  //   });
  //   console.log(customArr);
  //   console.log(testDiv);
  // }
  /**
   * render()
   * @returns an array of HTMLdivElements to be looped in
   * order matters
   */
  render() {
    const [webHeadingDiv, imgDiv, coderHeadingDiv] = [
      document.createElement("div"),
      document.createElement("div"),
      document.createElement("div"),
    ];
    Object.assign(imgDiv, { className: "images" });
    imgDiv.innerHTML = `
    <img class="image" id="img-person" src=${this._getImagePath().person}>
    <img class="image" id="img-color" src=${this._getImagePath().color}>
    <img class="image" id="img-word" src=${this._getImagePath().word}>
    `;

    Object.assign(webHeadingDiv, { className: "web-heading" });
    webHeadingDiv.innerHTML = `<h1>web</h1>
    <p>Interested in web technologies such as React.js, Node.js</p>
    `;
    Object.assign(coderHeadingDiv, { className: "coder-heading" });
    coderHeadingDiv.innerHTML = `<h1>&lt;coder&gt;</h1>
    <p>Opensource supporter</p>
    `;

    // this._createDiv([
    //   { tag: "div", content: "123", className: "className-1" },
    //   { tag: "div", content: "345", className: "className-2" },
    // ]);

    return [webHeadingDiv, imgDiv, coderHeadingDiv];
  }
}

let jumbotronComponent = new Jumbotron();
document.addEventListener("DOMContentLoaded", function () {
  jumbotronComponent
    .render()
    .forEach((item) => document.querySelector(".jumbotron").appendChild(item));
});
