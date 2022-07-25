class Footer {
  constructor(props) {
    this.state = props;
  }
  render() {
    const [footerContainer, footerItemContainer, copyRightContainer] = [
      document.createElement("div"),
      document.createElement("div"),
      document.createElement("div"),
    ];
    Object.assign(footerContainer, { className: "footer-container" });

    Object.assign(footerItemContainer, { className: "footer-icon" });
    footerItemContainer.innerHTML = `
    <a class="footer-nav-item" href="#">About</a>
    <a class="footer-nav-item" href="#">Personal Project</a>
    <a class="footer-nav-item" href="#">Opensource Project</a>
    <a class="footer-nav-item" href="#">Writing</a>
    <a class="footer-nav-item" href="#">Github icon</a>
    <a class="footer-nav-item" href="#">email icon</a>
    `;
    Object.assign(copyRightContainer, { className: "footer-copyright" });
    copyRightContainer.innerHTML = `
    <p>copyright &copy;2021 <a href="#">Winnie Wong</a></p>

    `;
    
    footerContainer.append(footerItemContainer, copyRightContainer)

    return [footerContainer]
  }
}

let FooterComponent = new Footer();
document.addEventListener("DOMContentLoaded", function () {
  FooterComponent.render().forEach((item) =>
    document.querySelector("footer").appendChild(item)
  );
});
