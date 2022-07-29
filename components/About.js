class About {
  constructor(props) {
    this.state = props;
  }

  render() {
    const aboutTitleText = document.createTextNode(`About me`);
    const aboutContentText = document.createTextNode(
      `This is Winnie, I am interested in Fullstack Web development. 
      I look forward to any project opportunities!
        `
    );
    const aboutContainer = document.createElement("div");
    Object.assign(aboutContainer, {
      className: "about-container",
      id: "about-container",
    });

    const aboutTitle = document.createElement("h2");
    Object.assign(aboutTitle, {
      className: `about-title`,
      id: `about-id`,
    });
    const aboutContent = document.createElement("p");
    Object.assign(aboutContent, {
      className: `about-content`,
      id: `about-content`,
    });

    aboutTitle.appendChild(aboutTitleText);
    aboutContent.appendChild(aboutContentText);

    aboutContainer.append(aboutTitle);
    aboutContainer.append(aboutContent);

    return [aboutContainer];
  }
}

let AboutComponent = new About();
document.addEventListener("DOMContentLoaded", function () {
  AboutComponent.render().forEach((item) =>
    document.querySelector(".about").appendChild(item)
  );
});
export default AboutComponent;
