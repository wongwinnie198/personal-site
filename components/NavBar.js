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
      getComputedStyle(navlist).visibility,
      typeof getComputedStyle(navlist).visibility
    );
    let menuIconBar = document.getElementById("menu-icon-bar");
    let menuIconTimes = document.getElementById("menu-icon-times");

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

  onMenuScreenResize() {
    let navlist = document.getElementById("nav-list");
    if (window.screen.width > "820px") {
      navlist.style.visibility = "visible";
    }
    navlist.style.visibility = "none";
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
    <a class="nav-item" href="#">About</a>
    <a class="nav-item" href="#">Personal Project</a>
    <a class="nav-item" href="#">Opensource Project</a>
    <a class="nav-item" href="#">Writing</a>
    <a class="nav-item" href="https://github.com/wongwinnie198"><i class="fa fa-github" aria-hidden="true"></i></a>
    <a class="nav-item" href="https://www.linkedin.com/in/wing-man-wong-7a95b386/"><i class="fa fa-linkedin" aria-hidden="true"></i>
    </a>
    `;

    Object.assign(navIcon, { className: "menu-icon", id: "menu-icon" });
    navIcon.innerHTML = `<i class="fa fa-bars" id ="menu-icon-bar"></i>
    <i class="fa fa-times" id="menu-icon-times"></i>
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
  window.onresize = navBarComponent.onMenuScreenResize;
});
