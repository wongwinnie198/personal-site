import CardComponent from "./Card.js";
import App from "./App.js";

class Project extends App {
  constructor(props) {
    super();
    this.state = props;
  }

  render() {
    const [projectContainer, projectTitle] = [
      document.createElement("div"),
      document.createElement("h2"),
    ];
    Object.assign(projectContainer, { className: "project-container" });
    Object.assign(projectTitle, { className: "project-title",id:"project-title" });
    projectTitle.innerHTML=`
    My Projects
    `
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(this.state.render());
    //   footerContainer.append()

    return [projectContainer];
  }
}

let ProjectComponent = new Project(CardComponent);
document.addEventListener("DOMContentLoaded", function () {
  ProjectComponent.render().forEach((item) =>
    document.querySelector(".project").appendChild(item)
  );
});
