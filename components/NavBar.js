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
    console.log(
      // "🚀 ~ file: NavBar.js ~ line 18 ~ NavBar ~ onMenuClick ~ getElementById",
      getComputedStyle(navlist).visibility,
      typeof getComputedStyle(navlist).visibility
    );
    let menuIconBar = document.getElementById("menu-icon-bar");
    let menuIconTimes = document.getElementById("menu-icon-times");
    let responsiveClassName = "nav-responsive";

    // menuIcon.classList.toggle(responsiveClassName);
    if (getComputedStyle(navlist).visibility == "hidden") {
      console.log("🚀 ~ file: NavBar.js ~ line 26 ~ NavBar ~ onMenuClick ~ if");
      navlist.style.visibility = "visible";
      menuIconBar.style.display = "none";
      menuIconTimes.style.display = "block";
    } else if (getComputedStyle(navlist).visibility == "visible") {
      console.log(
        "🚀 ~ file: NavBar.js ~ line 34 ~ NavBar ~ onMenuClick ~ navlist"
      );
      navlist.style.visibility = "hidden";
      menuIconBar.style.display = "block";
      menuIconTimes.style.display = "none";
    }
  }
  render() {
    const [logoDiv, navListDiv, navIcon] = [
      document.createElement("div"),
      document.createElement("div"),
      document.createElement("div"),
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
    navIcon.innerHTML = `<i class="fa fa-bars" id ="menu-icon-bar"></i>
    <h1 id="menu-icon-times">X</h1>
    `;

    return [logoDiv, navListDiv, navIcon];
  }
}

let navBarComponent = new NavBar(navBarItems);
document.addEventListener("DOMContentLoaded", function () {
  navBarComponent
    .render()
    .forEach((item) => document.querySelector("nav").appendChild(item));

  const [, , navIcon] = navBarComponent.render();
  document.getElementById("menu-icon").onclick = navBarComponent.onMenuClick;
});
