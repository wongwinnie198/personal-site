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

  render() {
    return `<nav>
                <ul>
                    <li class="nav-item"><a href="#">About</a></li>
                    <li class="nav-item"><a href="#">Personal Project</a></li>
                    <li class="nav-item"><a href="#">Opensource Project</a></li>
                    <li class="nav-item"><a href="#">Writing</a></li>
                    <li class="nav-item"><a href="#">Github icon</a></li>
                    <li class="nav-item"><a href="#">email icon</a></li>
                </ul>
              </nav>`;
  }
}

let navBarComponent = new NavBar(navBarItems);

document.querySelector("body").innerHTML = navBarComponent.render();
