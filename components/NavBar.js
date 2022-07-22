const navBarItems = [
  {
    name: "About",
    href: "#",
    createListTag: function () {
      li.innerHTML = `<a href=${this.href}>${this.name}</a>`;
    },
  },
];

class NavBar {
  constructor(props) {
    this.state = props;
  }

  onMenuClick() {
    let menuIcon = document.getElementById("menu-icon");
    let navlist = document.getElementById("nav-list");
    let responsiveClassName = "nav-responsive";
    menuIcon.classList.toggle(responsiveClassName);
    if ((navlist.style.visibility = "hidden")) {
      navlist.style.visibility = "visible";
    } else {
      navlist.style.visibility = "hidden";
    }
  }
  render() {
    const [logoDiv, navListDiv, navIcon] = [
      document.createElement("div"),
      document.createElement("div"),
      document.createElement("a"),
    ];
    Object.assign(logoDiv, { className: "logo", id: "logo" });
    logoDiv.innerHTML = `Winnie`;

    Object.assign(navListDiv, { className: "nav-list", id: "nav-list" });
    navListDiv.innerHTML = `
    <a class="nav-item href="#">About</a>
    <a class="nav-item href="#">Personal Project</a>
    <a class="nav-item href="#">Opensource Project</a>
    <a class="nav-item href="#">Writing</a>
    <a class="nav-item href="#">Github icon</a>
    <a class="nav-item href="#">email icon</a>
    `;

    Object.assign(navIcon, { className: "menu-icon", id: "menu-icon" });
    navIcon.innerHTML = `<i class="fa fa-bars"></i>`;

    return [logoDiv, navListDiv, navIcon];
  }
}

let navBarComponent = new NavBar(navBarItems);
document.addEventListener("DOMContentLoaded", function () {
  navBarComponent
    .render()
    .forEach((item) => document.querySelector("nav").appendChild(item));

  const[, , navIcon] = navBarComponent.render();
  // navIcon.addEventListener("click", navBarComponent.onMenuClick);
  document.getElementById('menu-icon').onclick = navBarComponent.onMenuClick;
});
