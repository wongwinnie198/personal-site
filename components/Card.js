const cardData = [
  {
    title: "card 1",
    desc: "desc of card 1",
    id: "card-1",
  },
  {
    title: "card 2",
    desc: "desc of card 2",
    id: "card-2",
  },
  {
    title: "card 3",
    desc: "desc of card 3",
    id: "card-3",
  },
  {
    title: "card 4",
    desc: "desc of card 4",
    id: "card-4",
  },
];

class Card {
  constructor(props) {
    this.state = props;
  }

  render() {
    const cardContainer = document.createElement("div");
    Object.assign(cardContainer, { className: "card-container" });

    for (let item of cardData) {
      let cardItem = document.createElement("div");
      Object.assign(cardItem, {
        className: `card-items`,
        id: `${item.id}`,
      });
      cardItem.innerHTML = `
        <h2 class='card-title'>${item.title}</h2>
        <p class='card-desc'>${item.desc}</p>
        `;
      cardContainer.append(cardItem);
    }

    //   footerContainer.append()

    return cardContainer;
  }
}

let CardComponent = new Card(cardData);
// document.addEventListener("DOMContentLoaded", function () {
//   CardComponent.render().forEach((item) =>
//     document.querySelector(".project").appendChild(item)
//   );
// });

export default CardComponent;
