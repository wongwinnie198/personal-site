const jumbotronData = {};
class Jumbotron {
  constructor(props) {
    this.state = props;
  }

  render() {
    return `
      <div class="web-h1">
        <h1><web></h1>
        </div>
        <div class="person-img">
        <img src="">
        </div>
        <div class="coder-h1">
        <h1>developer</h1>
      </div>
    `;
  }
}

let jumbotronComponent = new Jumbotron();

document.querySelector(".jumbotron").innerHTML = jumbotronComponent.render();
