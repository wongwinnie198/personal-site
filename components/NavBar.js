const navBarItems = [
  {
    name: "About",
    href: "#",
    createListTag: function () {
      li.innerHTML = `<a href=${this.href}>${this.name}</a>`;
    },
  },
];

class NavBar  {
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
    return `
    <div class="logo">
    Winnie
    </div>
    <div id="nav-list">
    <a class="nav-item href="#">About</a>
    <a class="nav-item href="#">Personal Project</a>
    <a class="nav-item href="#">Opensource Project</a>
    <a class="nav-item href="#">Writing</a>
    <a class="nav-item href="#">Github icon</a>
    <a class="nav-item href="#">email icon</a>
    </div>
    <a id="menu-icon" class="menu-icon" >
      <i class="fa fa-bars"></i>
   </a>
              `;
  }
}

let navBarComponent = new NavBar(navBarItems);
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("nav").innerHTML = navBarComponent.render();
  // let menuIcon = document.getElementById("menu-icon");
  // let navlist = document.getElementById("nav-list");
  // let responsiveClassName = "nav-responsive";
  // menuIcon.addEventListener("click", onMenuClick());
  // function onMenuClick() {
  //   menuIcon.classList.toggle(responsiveClassName);
  //   if ((navlist.style.visibility = "hidden")) {
  //     navlist.style.visibility = "visible";
  //   } else {
  //     navlist.style.visibility = "hidden";
  //   }
  // }
  console.log("🚀 ~ file: NavBar.js ~ line 11 ~ componentRegistry", document.componentRegistry, document.nextId)
});
